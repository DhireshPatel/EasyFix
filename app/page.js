"use client";

import { useState } from "react";
import "./globals.css"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CartPage from "@/components/CartPage";
import BookingModal from "@/components/BookingModal";

import { CATEGORIES } from "@/data/services";
import SearchBox from "@/components/SearchBox";

export default function Home() {

  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] =
    useState("home");

  const [showModal, setShowModal] =
    useState(false);

  function addToCart(service) {

    const exists = cart.find(
      item => item.id === service.id
    );

    if (exists) return;

    setCart([...cart, service]);
  }

  function removeFromCart(id) {
    setCart(
      cart.filter(item => item.id !== id)
    );
  }

  return (
    <main>

      <Navbar
        cart={cart}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {currentPage === "home" && (
        <>
          <Hero />
          {/* <SearchBox /> */}

          {CATEGORIES.map(category => (

            <section
              key={category.id}
              id={`category-${category.id}`}
            >
              <h2>{category.name}</h2>
              <div className="services-grid">
                {category.services.map(service => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    addToCart={addToCart}
                    cart={cart}
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
        />
      )}

      <BookingModal
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </main>
  );
}