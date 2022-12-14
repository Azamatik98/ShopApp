import { useEffect, useContext } from "react";
import { API_URL, API_KEY } from "../config";
import { ShopContext } from "../context";
import ProductsList from "./ProductsList";
import Preloader from "./Preloader";
import BasketList from "./BasketList";
import Alert from "./Alert";
import Cart from "./Cart";

function Shop() {
  const { loading, order, isBasketShow, alertName, setProducts } =
    useContext(ShopContext);

  useEffect(function getProducts() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.featured);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <ProductsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}

export default Shop;
