function ProductsItem(props) {
  const {
    id,
    name,
    desription,
    price,
    full_background,
    addToBasket = Function.prototype,
  } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{desription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn red darken-2"
          onClick={() =>
            addToBasket({
              id,
              name,
              price,
            })
          }
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price} руб.
        </span>
      </div>
    </div>
  );
}

export default ProductsItem;
