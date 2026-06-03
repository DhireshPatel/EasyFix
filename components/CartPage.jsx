"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BookingModal from "./BookingModal";

export default function CartPage({ cart, setCart, removeFromCart, clearCart, setCurrentPage, }) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const changeQty = (id, change) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? {
            ...item,
            qty: Math.max(1, (item.qty || 1) + change),
          }
          : item
      )
    );
  };

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const visitingFee = 99;
  const subtotal = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);
  const discount = subtotal > 1000 ? subtotal / 10 : 0;
  const total = subtotal + visitingFee - discount;

  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setForm((prev) => ({
        ...prev,
        address: `Lat: ${latitude}, Lng: ${longitude}`,
      }));
    });
  };

  const bookNow = () => {
    if (cart.length === 0) return;

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.address.trim() ||
      !form.date
    ) {
      showToast("Please fill all fields!", "warning");
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      showToast("Please enter a valid 10-digit phone number!", "warning");
      return;
    }




    setShowModal(true);

  };

  const handleBookingDone = () => {
    clearCart();
    setShowModal(false);
  };

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
    <div className="cart-page ">
      {/* HEADER */}
      <div className="section-header flex items-center justify-between mb-4">
        <button className="btn-ghost" onClick={() => setCurrentPage("home")}>
          ← Back
        </button>
        <div className="section-title">Your Cart</div>
        <div className="section-line"></div>
      </div>

      {/* MAIN GRID */}
      {cart.length === 0 ? (
        <div className="flex justify-center items-center min-h-100">
          <div className="empty-state text-center">
            <div className="empty-icon"></div>
            <div className="empty-title">Your Cart is Empty</div>
            <div className="empty-desc">
              Browse our services and add them to your cart.
            </div>
            <button className="btn-primary max-w-50 mx-auto" onClick={() => setCurrentPage("home")}>Browse Services</button>
          </div>
        </div>
      ) : (
        <div className="md:flex gap-6 ">
          {/* LEFT SIDE */}
          {/* <div className="w-2/3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between  cart-item"
              >
                <div>
                  <h3>
                    {item.icon} {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">₹{item.price}</p>
                </div>
                <button
                  className="text-red-500"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div> */}

          <div className="md:w-2/3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="md:flex bg-red-900  items-center justify-between p-4 border rounded-lg mb-3 cart-item"
              >
                {/* Left */}
                <div className="flex md:items-center gap-4">
                  <div className="text-3xl">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Certified Pro
                    </p>
                  </div>
                </div>

                <div className="flex items-center sm:justify-between gap-5 Cartitem-footer">
                  {/* Quantity */}
                  <div className="flex md:items-center border rounded-md overflow-hidden qty-box">
                    <button
                      onClick={() => changeQty(item.id, -1)}
                      className="px-3 py-1 border-r"
                    >
                      −
                    </button>

                    <span className="px-4">
                      {item.qty || 1}
                    </span>

                    <button
                      onClick={() => changeQty(item.id, 1)}
                      className="px-3 py-1 border-l"
                    >
                      +
                    </button>
                  </div>

                  {/* Price */}
                  <div className="font-semibold flex items-center gap-6 cart-item-price">
                    ₹{(item.price * (item.qty || 1)).toLocaleString()}


                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-xl remove-btn"
                      title="Remove"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {discount > 0 && (
              <div className="discount bg-[rgba(45,212,167,0.08)] border border-[rgba(45,212,167,0.25)] rounded-[10px] text-[0.85rem] text-green-400">
                🎉 10% discount applied for booking 3+ services!
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="md:w-1/3">
            <div className="order-summary">
              <div className="summary-title">Order Summary</div>

              {cart.map((s) => (
                <div key={s.id} className="summary-row">
                  <span className="flex gap-2 mb-5 text-[16px]">
                    {s.icon} {s.name}
                  </span>
                  <span className="text-[16px]">₹{s.price * (s.qty || 1)} </span> 
                </div>
              ))}

              <div className="summary-row">
                <span>Visiting Fee</span>
                <span>₹{visitingFee}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-sm text-[#2dd4a7]">
                  <span>Discount</span>
                  <span>-₹{discount.toLocaleString()}</span>
                </div>
              )}

              <div className="flex justify-between font-bold mt-3 border-t pt-2 summary-row total">
                <span>Total</span>
                <span className="price">₹{total.toLocaleString()}</span>
              </div>

              {/* FORM */}
              <div className="mt-4 space-y-2 booking-form">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    id="bookingName"
                    className="form-input"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    id="bookingPhone"
                    className="form-input"
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Address</label>
                  <div className="flex gap-2">
                    <input
                      id="bookingAddress"
                      className="form-input flex-1"
                      type="text"
                      name="address"
                      placeholder="Enter your address"
                      value={form.address}
                      onChange={handleChange}
                    />


                    <button
                      className="text-xs px-2 "
                      onClick={getCurrentLocation}
                      type="button"
                    >
                      GPS
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Date</label>
                  <input
                    id="bookingDate"
                    className="form-input"
                    type="date"
                    name="date"
                    min={today}
                    value={form.date}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button className="btn-primary w-full mt-4" onClick={bookNow}>
                ⚡ Book Now — ₹{total}
              </button>

              <p className="text-center text-xs mt-2 text-gray-500">
                🔒 Secure booking · No advance payment
              </p>
            </div>
          </div>
        </div>
      )}


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


      {/* BOOKING MODAL */}
      {
        showModal && (
          <BookingModal
            showModal={showModal}
            bookingId={Date.now()}
            cart={cart}
            total={total}
            // onClose={() => setShowModal(false)} // FIXED
            onClose={handleBookingDone}
          />
        )
      }
    </div >
  );
}
