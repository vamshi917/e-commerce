import logo from "../Assets/logo.png";
import addCart from "../Assets/cart_icon.png";
import navToggle from "../Assets/dropdown_icon.png"
import "../Navbar/Navbar.css";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { shopContext } from "../../Context/ShopContext";

const Navbar = () => {

  const { cartTotalQty } = useContext(shopContext);
  const [activeMenu, setActiveMenu] = useState("shop");
  const menuRef = useRef();

  const dropdown_toggle = (e)=>{
    menuRef.current.classList.toggle("nav-menu-visible")
    e.target.classList.toggle("open")
  }

  return (
    <>
      <div className="navbar">
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <div className="nav-logo">
            <img src={logo} alt="" />
            <p
              onClick={() => {
                setActiveMenu("zaika");
              }}
            >
              ZAIKA SHOP {activeMenu === "zaika" ? <></> : <></>}
            </p>
          </div>
        </Link>
        <img className="nav-toggle" onClick={dropdown_toggle} src={navToggle} alt="" />

        <div ref={menuRef} className="nav-list">
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <li onClick={() => setActiveMenu("shops")}>
              Shop {activeMenu === "shops" ? <hr /> : <></>}
            </li>
          </Link>

          <Link style={{ textDecoration: "none" }} to={"mens"}>
            <li onClick={() => setActiveMenu("mens")}>
              Mens {activeMenu === "mens" ? <hr /> : <></>}
            </li>
          </Link>

          <Link style={{ textDecoration: "none" }} to={"womens"}>
            <li onClick={() => setActiveMenu("womens")}>
              Womens {activeMenu === "womens" ? <hr /> : <></>}
            </li>
          </Link>

          <Link style={{ textDecoration: "none" }} to={"kids"}>
            <li onClick={() => setActiveMenu("kids")}>
              Kids {activeMenu === "kids" ? <hr /> : <></>}
            </li>
          </Link>
        </div>
        <div className="nav-login-cart">
          <Link to={"/loginSignup"}>
            <button>LOGIN</button>
          </Link>
          <Link to={"/cart"}>
            <img src={addCart} alt="" />
          </Link>
          <div className="nav-cart-count">{cartTotalQty()}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
