import { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const shopContext = createContext(null);

const defaultcart = () => {
  const cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
// console.log(cart)

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(defaultcart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // console.log(cartItems)
  };

  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmountCart = () => {
    let totalAmount = 0;
    // console.log(totalAmount)
    for (const item in cartItems) {
      // console.log(item)
      // console.log(cartItems)
      if (cartItems[item] > 0) {
        // console.log(cartItems[item])
        let myTotal = all_product.find((prod) => prod.id === Number(item));
        // console.log(item)
        // console.log(myTotal)
        totalAmount += myTotal.new_price * cartItems[item];
        // console.log(cartItems[item])
      }
    }
    return totalAmount;
  };

  const cartTotalQty = () => {
    let totalQty = 0;
    for (let itemOfCart in cartItems) {
      if (cartItems[itemOfCart] > 0) {
        
        totalQty +=  cartItems[itemOfCart];
      }
    }
    return totalQty;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeToCart,
    getTotalAmountCart,
    cartTotalQty,
  };

  return (
    <shopContext.Provider value={contextValue}>{children}</shopContext.Provider>
  );
};

export default ShopContextProvider;
