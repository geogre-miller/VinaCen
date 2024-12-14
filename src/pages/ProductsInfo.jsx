import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WorkWithUs from "@/components/WorkWithUs";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import supabase from "@/apis/supabaseClient";
import BreadcrumbsWithIcon from "@/components/BreadcrumbsWithIcon";

const ProductsInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]); // State to store image URLs
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const { data, error: supabaseError } = await supabase
          .from("products")
          .select("*")
          .eq("product_id", id)
          .single();

        if (supabaseError) {
          throw supabaseError;
        }

        if (!data) {
          throw new Error("Product not found");
        }

        setProduct(data);
        await fetchImages(id); // Call fetchImages after setting the product
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(err.message || "Failed to load product details");
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const fetchImages = async (productId) => {
    try {
      // Fetch product to get the folder name
      const { data: productData, error: productError } = await supabase
        .from("products")
        .select("folder_name")
        .eq("product_id", productId) // Use the correct column name
        .single();

      if (productError) {
        throw productError;
      }

      const folderName = productData.folder_name;

      // Fetch images from the specific folder in storage
      const { data, error: imageError } = await supabase.storage
        .from("products_images")
        .list(`${folderName}/`); // Use the folder name

      if (imageError) {
        throw imageError;
      }

      const imageUrls = data.map((file) => {
        return supabase.storage
          .from("products_images")
          .getPublicUrl(`${folderName}/${file.name}`).publicURL;
      });

      setImages(imageUrls);
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="p-4">
          <BreadcrumbsWithIcon />
        </div>
        <div className="flex items-center justify-center h-96">
          <div className="loader"></div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center h-96">
          <Typography variant="h5" color="red">
            {error}
          </Typography>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="p-4">
        <BreadcrumbsWithIcon />
      </div>
      <div className="container mx-auto px-4 pb-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Product Image */}
          <div className="md:w-1/2">
            <div className="pt-2">
              <img
                src={product?.product_image}
                alt={product?.name}
                className="w-full h-[394px] rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="md:w-1/2 space-y-6">
            {/* Product Title */}
            <div className="border-b border-gray-200 pb-6">
              <Typography
                variant="h2"
                className="text-3xl font-bold mb-2 font-nunito"
              >
                {product?.name}
              </Typography>
              <Typography variant="h6" className="text-blue-gray-700">
                Model: {product?.code}
              </Typography>
            </div>

            {/* Price */}
            <div className="py-4">
              <Typography
                variant="h4"
                className="text-blue-gray-900 font-roboto"
              >
                {product?.price ? `$${product?.price.toFixed(2)}` : "Liên hệ"}
              </Typography>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <Typography variant="h6" className="font-bold font-nunito">
                Mô tả sản phẩm:
              </Typography>
              <Typography className="text-blue-gray-900 text-justify font-roboto">
                {product?.description || product?.short_desc}
              </Typography>
            </div>

            {/* Specifications */}
            <div className="space-y-4">
              <Typography variant="h6" className="font-bold font-nunito">
                Thông số kỹ thuật:
              </Typography>
              <div className="grid grid-cols-2 gap-4">
                {product?.specifications?.map((spec, index) => (
                  <div key={index} className="border-b border-gray-200 py-2">
                    <Typography className="font-medium">
                      {spec.label}
                    </Typography>
                    <Typography className="text-blue-gray-600">
                      {spec.value}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <Link to="/contacts">
              <div className="pt-6">
                <button className="w-full font-roboto text-white py-3 px-6 rounded-lg transition-colors duration-300 bg-gradient-to-r from-[#deaa79] to-[#659287]">
                  Liên hệ tư vấn ngay!
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <WorkWithUs />
      <Footer />
    </>
  );
};

export default ProductsInfo;
