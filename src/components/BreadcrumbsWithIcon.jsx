import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBlogTitle } from "@/apis/blogsApi";

export function BreadcrumbsWithIcon() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const [blogTitle, setBlogTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const translations = {
    products: "Sản phẩm",
    about_us: "Về chúng tôi",
    contact: "Liên hệ",
    blogs: "Tin tức",
    agency: "Đại lý",
  };

  // Fetch blog title when on blog page
  useEffect(() => {
    const blogId = pathnames[1];

    if (pathnames[0] !== "blogs" || !blogId) {
      setBlogTitle("");
      return;
    }

    let isSubscribed = true;

    const getBlogTitle = async () => {
      if (!isSubscribed) return;

      setIsLoading(true);
      try {
        const { data, error } = await fetchBlogTitle(blogId);

        if (!error && data && isSubscribed) {
          setBlogTitle(data);
          const newUrl = `/blogs/${data.toLowerCase().replace(/\s+/g, "-")}`;
          window.history.replaceState(null, "", newUrl);
        }
      } catch (error) {
        if (isSubscribed) {
          setBlogTitle("");
        }
      } finally {
        if (isSubscribed) {
          setIsLoading(false);
        }
      }
    };

    getBlogTitle();

    return () => {
      isSubscribed = false;
    };
  }, [pathnames[0], pathnames[1]]);

  const getDisplayName = (segment) => {
    if (translations[segment]) {
      return translations[segment];
    }

    if (pathnames[0] === "blogs" && segment === pathnames[1]) {
      return blogTitle || segment;
    }

    return segment;
  };

  const getBreadcrumbLink = (value, index) => {
    if (pathnames[0] === "blogs" && index === 1 && blogTitle) {
      return `/blogs/${blogTitle.toLowerCase().replace(/\s+/g, "-")}`;
    }
    return `/${pathnames.slice(0, index + 1).join("/")}`;
  };

  return (
    <nav aria-label="breadcrumb" className="w-max">
      <ol className="flex w-full flex-wrap items-center rounded-md bg-slate-50 px-4 py-2">
        <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          {pathnames.length > 0 && (
            <span className="pointer-events-none mx-2 text-slate-800">/</span>
          )}
        </li>

        {pathnames.map((value, index) => {
          const to = getBreadcrumbLink(value, index);
          const isLast = index === pathnames.length - 1;

          return (
            <li
              key={to}
              className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800"
            >
              <Link to={to}>{getDisplayName(value)}</Link>
              {!isLast && (
                <span className="pointer-events-none mx-2 text-slate-800">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default BreadcrumbsWithIcon;
