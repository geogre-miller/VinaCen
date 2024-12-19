import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import WorkWithUs from "@/components/WorkWithUs";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import supabase from "@/apis/supabaseClient";
import BreadcrumbsWithIcon from "@/components/BreadcrumbsWithIcon";
import ProductsDetails from "@/components/Products/ProductsDetails";
import FeaturedImageGallery from "@/components/Products/ProductsGallery";
import { fetchProductAndImages } from "@/apis/productsApi";

const ProductsInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProductData = async () => {
      setLoading(true);
      const { data, error } = await fetchProductAndImages(id);
      if (error) {
        setError(error);
      } else if (data) {
        setProduct(data.product);
        setImageUrls(data.images);
      }
      setLoading(false);
    };

    loadProductData();
  }, [id]);

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
          {/* Left side - Main Image */}
          <div className="md:w-1/2">
            <div className="pt-2">
              <img
                src={product.product_image}
                alt={product?.name}
                className="w-full h-[441px] rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          {/* Right side - Product Details */}
          <div className="md:w-1/2 space-y-6">
            <div className="border-b border-gray-200 pb-2">
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
            <div className="py-1">
              <Typography
                variant="h4"
                className="text-blue-gray-900 font-roboto"
              >
                {product?.price ? `$${product?.price.toFixed(2)}` : "Liên hệ"}
              </Typography>
            </div>
            <div className="space-y-4">
              <Typography variant="h6" className="font-bold font-nunito">
                Mô tả sản phẩm:
              </Typography>
              <Typography className="text-blue-gray-900 text-justify font-roboto">
                {product?.description || product?.short_desc}
              </Typography>
            </div>
            <div className="space-y-4">
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
            <Link to="/contacts">
              <div className="pt-2">
                <button className="w-full font-roboto text-white py-3 px-6 rounded-lg hover:scale-105 focus:scale-105 active:scale-100 transition-transform duration-300 bg-gradient-to-r from-[#deaa79] to-[#659287]">
                  Liên hệ tư vấn ngay!
                </button>
              </div>
            </Link>
          </div>
        </div>

        {/* ProductsDetails Component */}
        <div className="mt-12">
          <ProductsDetails product={product} />
        </div>

        {/* FeaturedImageGallery Component */}
        <div className="mt-12">
          <h1 className="text-2xl text-center font-bold font-nunito uppercase mb-5">
            Hình ảnh của sản phẩm:
          </h1>
          <FeaturedImageGallery images={imageUrls} />
        </div>

        <div className="mt-12 mx-auto max-w-6xl px-4">
          <div className="flex flex-col justify-center items-center">
            <div className="mb-7 px-16">
              <h2 className="text-xl text-center  font-nunito font-bold uppercase mb-2">
                Đa dạng mẫu mã
              </h2>
              <p className="text-center font-roboto indent-3">
                Với hàng trăm mẫu mã đa dạng, Vinacen mang đến cho bạn vô vàn
                lựa chọn để tạo nên không gian sống độc đáo. Từ những họa tiết
                tinh tế đến những đường nét mạnh mẽ, chắc chắn sẽ có một mẫu phù
                hợp với phong cách của bạn. Hãy khám phá bảng mẫu sản phẩm của
                chúng tôi để tìm kiếm nguồn cảm hứng cho không gian sống của
                bạn!
              </p>
            </div>
            <div>
              <img
                src="https://vinacen.vn/frontend/images/mau.jpg"
                alt="samples"
                className="w-full h-[780px] object-cover rounded-sm "
              />
              <div className="block mt-2 font-sans text-sm antialiased font-normal leading-normal text-center text-inherit">
                Bảng mẫu sản phẩm đầy đủ
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-center">
              <div className="w-full">
                <img
                  src="https://vinacen.vn/frontend/images/colors.jpg"
                  alt="colors"
                  className="w-full h-auto object-cover object-center rounded-lg overflow-hidden shadow-lg "
                />
                <div className="block mt-2 font-sans text-sm antialiased font-normal leading-normal text-center text-inherit">
                  Bảng màu sản phẩm
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="w-full mt-11">
                <img
                  src="https://vinacen.vn/frontend/images/sosanh.jpg"
                  alt="comparison"
                  className="w-full h-[348px] object-fill object-center rounded-lg overflow-hidden shadow-lg"
                />
                <div className="hover:text-[#f4511e] transition-all duration-150 block mt-2 font-sans text-sm antialiased font-normal leading-normal text-center text-inherit">
                  Cảnh báo ! Trên thị trường hiện có hàng trung quốc kém chất
                  lượng nhái theo thương hiệu của Vinacen. Quý khách hàng lưu ý
                  những đặc điểm sau để phân biệt sản phẩm chính hãng Vinacen và
                  hàng nhái của trung quốc!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WorkWithUs />
      <Footer />
    </>
  );
};

export default ProductsInfo;
