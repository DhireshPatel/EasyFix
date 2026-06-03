// "use client";

// export default function BookingModal({
//   showModal,
//   bookingId,
//   cart,
//   total,
//   closeModal,
// }) {
//   if (!showModal) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <div className="modal-success-icon">✓</div>

//         <h2>Booking Confirmed!</h2>

//         <p>
//           Your electrician services have been successfully booked.
//           Our team will contact you shortly to confirm the schedule.
//         </p>

//         <div className="booking-id">
//           BOOKING ID: #{bookingId}
//         </div>

//         <div className="booked-services">
//           {cart.map((s, index) => (
//             <div className="booked-service-item" key={index}>
//               <span className="check">✓</span>

//               <span>
//                 {s.icon} {s.name}
//               </span>

//               <span
//                 style={{
//                   marginLeft: "auto",
//                   color: "var(--accent)",
//                 }}
//               >
//                 quantity-{s.qty}, ₹{s.price}/each, ₹
//                 {(s.price * s.qty).toLocaleString()}
//               </span>
//             </div>
//           ))}

//           <div
//             className="booked-service-item"
//             style={{
//               fontWeight: 600,
//             }}
//           >
//             <span></span>

//             <span>Total</span>

//             <span
//               style={{
//                 marginLeft: "auto",
//                 color: "var(--accent)",
//               }}
//             >
//               ₹{total.toLocaleString()}
//             </span>
//           </div>
//         </div>

//         <button className="btn-primary" onClick={closeModal}>
//           Done ✓
//         </button>
//       </div>
//     </div>
//   );
// }



"use client"; // if using Next.js App Router

import { useState } from "react";

export default function BookingModal({ cart = [], bookingId, total, onClose }) {
  if (!bookingId) return null; // don't render if no booking yet



  return (
    <div className="modal-overlay show">
      <div className="modal">
        <div className="modal-success-icon">✓</div>
        <h2>Booking Confirmed!</h2>
        <p>
          Your electrician services have been successfully booked. Our team will contact you shortly to confirm the
          schedule.
        </p>
        <div className="booking-id">BOOKING ID: #{bookingId}</div>

        <div className="booked-services">
          {cart.map((s, i) => (
            <div key={i} className="booked-service-item">
              <span className="check">✓</span>
              <span>{s.icon} {s.name}</span>
              <span style={{ marginLeft: "auto", color: "var(--accent)" }}>
                <span>quantity-{s.qty}</span>, <span>{s.price}/each</span>, ₹{(s.price * s.qty).toLocaleString()}
              </span>
            </div>
          ))}

          <div
            className="booked-service-item"
            style={{ fontWeight: 600, color: "var(--text)" }}
          >
            <span></span>
            <span>Total</span>
            <span
              style={{
                marginLeft: "auto",
                color: "var(--accent)",
                fontFamily: "'Bebas Neue', cursive",
                fontSize: "1.2rem",
              }}
            >
              ₹{total.toLocaleString()}
            </span>
          </div>
        </div>

        <button className="btn-primary" onClick={onClose}>Done ✓</button>
      </div>
    </div>
  );
}
