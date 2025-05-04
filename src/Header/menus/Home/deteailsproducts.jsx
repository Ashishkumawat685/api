import { useParams } from "react-router-dom";
import { Product } from "./ProductsArray";
function ProductDetails() {
  const { ProductId } = useParams();

  const findProduct = Product.find((details) => details.id == ProductId);
  return (
    <>
      <h1>{findProduct.description}</h1>;
    </>
  );
}

export { ProductDetails };
