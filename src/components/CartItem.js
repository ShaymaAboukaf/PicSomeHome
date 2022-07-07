import React, { useContext } from "react";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

function CartItem({ item }) {
  const [hovered, elementRef] = useHover();
  const { removeFromCart } = useContext(Context);
  const trashClassName = hovered ? "fill" : "line";
  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${trashClassName}`}
        onClick={() => removeFromCart(item.id)}
        ref={elementRef}
      ></i>
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
