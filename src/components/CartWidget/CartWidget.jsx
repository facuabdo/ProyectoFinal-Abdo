import { AiOutlineShoppingCart } from "react-icons/ai";

export const CartWidget = () => {
  const cuentaCarrito = () => {
    alert("Hay 5 elementos");
  };

  return (
    <button className="cart-widget" onClick={cuentaCarrito}>
      (5) <AiOutlineShoppingCart color="blue.500" />
    </button>
  );
};
