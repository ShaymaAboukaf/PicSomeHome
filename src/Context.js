import React, { useState, useEffect } from "react";
import photosData from "./images.json";
const Context = React.createContext();
function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setAllPhotos(photosData);
  }, []);
  function toggleFavorite(id) {
    const toggledPhotos = allPhotos.map((photo) => {
      if (photo.id == id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setAllPhotos(toggledPhotos);
  }
  function addToCart(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem]);
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function emptyCart() {
    cartItems.splice(0);
  }

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addToCart,
        removeFromCart,
        emptyCart,
        cartItems,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
