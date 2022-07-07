import React, { useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

const Image = ({ className, img }) => {
  const [hovered, elementRef] = useHover();
  const { toggleFavorite, addToCart, removeFromCart, cartItems } =
    useContext(Context);

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  }

  return (
    <div ref={elementRef} className={`${className} image-container`}>
      <img src={img.url} className="image-grid" alt="" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
};

Image.protoType = {
  className: PropTypes.string,
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
