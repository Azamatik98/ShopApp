import { useContext } from "react";
import { ShopContext } from "../context";
import ProductsItem from "./ProductsItem";

function ProductsList() {
  const { products = [] } = useContext(ShopContext);

  if (!products.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="products">
      {products.map((item) => (
        <ProductsItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ProductsList;
