import ProductsItem from "./ProductsItem";

function ProductsList(props) {
  const { products = [], addToBasket = Function.prototype } = props;

  if (!products.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="products">
      {products.map((item) => (
        <ProductsItem key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
}

export default ProductsList;
