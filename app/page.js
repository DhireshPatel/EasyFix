"use client";

import { useState } from "react";
import "./globals.css"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CartPage from "@/components/CartPage";
import { FaFan } from "react-icons/fa";
// import BookingModal from "@/components/BookingModal";

import { CATEGORIES } from "@/data/services";
import SearchBox from "@/components/SearchBox";

export default function Home() {

  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] =
    useState("home");
  const [showMenu, setShowMenu] = useState(false);

  const [showModal, setShowModal] =
    useState(false);

  function addToCart(service) {

    const exists = cart.find(
      item => item.id === service.id
    );

    if (exists) return;

    setCart([...cart, service]);
  }

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  function removeFromCart(id) {
    setCart(
      cart.filter(item => item.id !== id)
    );
  }

  function clearCart() {
    setCart([]);
  }


  const showToast = (message, type = "success") => {
    setToast({
      show: true,
      message,
      type,
    });

    setTimeout(() => {
      setToast((prev) => ({
        ...prev,
        show: false,
      }));
    }, 2500);
  };


  return (
    <main>

      <Navbar
        cart={cart}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />

      {currentPage === "home" && (
        <>
          <Hero />
          {/* <SearchBox /> */}

          {CATEGORIES.map(category => (

            <section className="section"
              key={category.id}
              id={`category-${category.id}`}
            >
              <h2 className="category-heading">{category.icon} {category.name}</h2>
              <div className="services-grid">
                {category.services.map(service => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    addToCart={addToCart}
                    cart={cart}
                    showToast={showToast}
                  />
                ))}
              </div>
            </section>
          ))}
        </>
      )}

      {currentPage === "cart" && (
        <CartPage
          cart={cart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          setCurrentPage={setCurrentPage}
          setCart={setCart}
        />
      )}

      {/* <BookingModal
        showModal={showModal}
        setShowModal={setShowModal}
      /> */}

      {toast.show && (
        <div
          className={`toast ${toast.type === "warning"
            ? "toast-warning"
            : "toast-success"
            }`}
        >
          {toast.message}
        </div>
      )}
    </main>
  );
}