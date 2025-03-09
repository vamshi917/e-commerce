import { useContext } from "react";
import "./CartItems.css";
import { shopContext } from "../../Context/ShopContext";
// import remove_icon from "../Assets/nav_dropdown.png"
import { RxCross2 } from "react-icons/rx";

const CartItems = () => {
  const { all_product, cartItems,addToCart, removeToCart, getTotalAmountCart } = useContext(shopContext);
  return (
    <div className="cartitems-container">
      <div className="cartitems-main-format">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e, index) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={index}>
              <div className="cartitems-list cartitems-main-format">
                <img
                  className="cartitem-list-product-img"
                  src={e.image}
                  alt=""
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <div className="btn-con">
                <button onClick={()=>removeToCart(e.id)} className="cartitems-quantity1">-</button>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <button onClick={()=>addToCart(e.id)} className="cartitems-quantity2">+</button>
                </div>
                {/* <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button> */}
                <p>${e.new_price * cartItems[e.id]}</p>

                <p
                  className="cartitems-remove"
                  onClick={() => removeToCart(e.id)}
                >
                  {<RxCross2 />}
                </p>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartlists-down">
        <div className="cartlists-total">
          <h1>Cart totals</h1>
          <div>
            <div className="cartlists-total-items">
              <p>Subtotal</p>
              <p>${getTotalAmountCart()}</p>
            </div>
            <hr />
            <div className="cartlists-total-items">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartlists-total-items">
              <p>Total</p>
              <p>${getTotalAmountCart()}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-input">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
