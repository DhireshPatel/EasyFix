// export default function ServiceCard({
//     service,
//     addToCart,
//     cart,
// }) {

//     const alreadyAdded = cart.find(
//         item => item.id === service.id
//     );

//     return (
//         <div className="service-card" id={`card-${service.id}`}>


//             <span className="service-icon">
//                 {service.icon}
//             </span>

//             <h3>{service.name}</h3>

//             <p>{service.desc}</p>

//             <div className="service-footer">

//                 <span>
//                     ₹{service.price}
//                 </span>

//                 <button
//                     onClick={() => addToCart(service)}
//                     disabled={alreadyAdded}
//                 >
//                     {alreadyAdded
//                         ? "Added"
//                         : "Add To Cart"}
//                 </button>

//             </div>

//         </div>
//     );
// }

export default function ServiceCard({
    service,
    addToCart,
    cart,
    showToast,
}) {
    const alreadyAdded = cart.find(
        (item) => item.id === service.id
    );

    const handleAddToCart = () => {
        if (alreadyAdded) {
            showToast("Service already added!", "warning");
            return;
        }

        addToCart(service);
        showToast("Added to cart!");
    };

    return (
        <div className="service-card" id={`card-${service.id}`}>
            <span className="service-icon">
                {service.icon}
            </span>

            <h3 className="service-name">{service.name}</h3>

            <p className="service-desc">{service.desc}</p>

            <div className="service-footer">
                <p className="service-price">₹{service.price} <span>/service</span></p>

                <button
                    onClick={handleAddToCart}
                    disabled={alreadyAdded}
                    className="add-cart-btn"
                >
                    {alreadyAdded ? "Added" : "+ Add"}
                </button>
            </div>
        </div>
    );
}