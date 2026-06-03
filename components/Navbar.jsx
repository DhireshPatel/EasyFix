import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { TbMenuDeep } from "react-icons/tb";

export default function Navbar({
  cart,
  setCurrentPage,
  currentPage,
  showMenu,
  setShowMenu,
}) {

  // const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon"></span>Zfix
      </div>
      <div className="flex gap-5">
        <div className={`nav-links ${showMenu ? "show" : ""}`}>
          <a className={`${currentPage === "home" ? "nav-btn active" : "nav-btn"} nav-link`}
            onClick={() => {
              setCurrentPage("home");
              setShowMenu(false);
            }}>
            Services
          </a>

          <a className={`${currentPage === "about" ? "nav-btn active" : "nav-btn"} nav-link`}
            onClick={() => {
              setCurrentPage("about");
              setShowMenu(false);
            }}>
            About
          </a>

        </div>
        {/* <span className="cart-btn"> */}
        <button className={
          currentPage === "cart"
            ? "nav-btn cart-btn active"
            : "nav-btn cart-btn"
        }
          onClick={() => setCurrentPage("cart")}>
          <BsCart2 className="size-5" />
          <span className="cart-badge">{cart.length}</span>
        </button>

        <button
          className="menu-toggle"
          onClick={() => setShowMenu(!showMenu)}
        >
          <TbMenuDeep />
        </button>
        {/* </span> */}
      </div>
    </nav >
  );
}