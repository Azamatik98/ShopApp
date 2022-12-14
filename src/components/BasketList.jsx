import { useContext } from "react";
import { ShopContext } from "../context";
import BasketItem from "./BasketItem";

function BasketList() {
  const { order = [], handleBasketShow = Function.prototype } =
    useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active red darken-2">Корзина</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.id} {...item} />)
      ) : (
        <li className="collection-item">Кориза пуста</li>
      )}
      <li className="collection-item active red darken-2">
        Общая стоимость: {totalPrice} руб.
      </li>
      <li className="collection-item active red darken-2">
        <button className="btn red lighten-1 btn-small">Оформить</button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export default BasketList;
