import { useEffect, useState } from "react";
import supabase from "../apis/supabaseClient"; // Adjust the import based on your setup
import { useParams } from "react-router-dom";

const Agency = () => {
  const { productId } = useParams(); // Get productId from URL parameters

  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductAndImages = async () => {
      if (!productId) {
        setError("Product ID is not defined.");
        return;
      }

      try {
        // Fetch product details
        const { data: productData, error: productError } = await supabase
          .from("products")
          .select("*")
          .eq("product_id", productId) // Use 'product_id' instead of 'id'
          .single();

        if (productError) throw productError;
        setProduct(productData);

        // Fetch images from the corresponding folder in storage
        const { data: imageData, error: imageError } = await supabase.storage
          .from("products_images")
          .list(`${productData.folder_name}/`); // Use the folder name

        if (imageError) throw imageError;

        // Construct public URLs for the images
        const imageUrls = imageData.map(
          (file) =>
            supabase.storage
              .from("products_images")
              .getPublicUrl(`${productData.folder_name}/${file.name}`).publicURL
        );

        setImages(imageUrls);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProductAndImages();
  }, [productId]);

  if (error) return <div>Error: {error}</div>;

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Code: {product.code}</p>
      <p>Price: ${product.price}</p>
      <h2>Images</h2>
      <div>
        {images.length > 0 ? (
          images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Product ${product.name} Image ${index + 1}`}
            />
          ))
        ) : (
          <p>No images available for this product.</p>
        )}
      </div>
    </div>
  );
};

export default Agency;
