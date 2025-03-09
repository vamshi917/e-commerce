import { useContext } from "react";
import { useParams } from "react-router-dom";
import { shopContext } from "../Context/ShopContext";
import BreadCrum from "../Components/BreadCrums/BreadCrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import ProductDescription from "../Components/ProductDescription/ProductDescription";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Products = () => {
  const {all_product} = useContext(shopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className="products">
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <ProductDescription />
      <RelatedProducts />
    </div>
  );
};

export default Products;
