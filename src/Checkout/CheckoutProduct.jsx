import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useStateValue } from "../StateProvider";
import "./CheckoutProduct.css";

const CheckoutProduct = (props) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };

  return (
    <>
      <motion.div
          className="checkoutProduct"
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="checkoutProductImage">
            <img src={props.image} />
          </div>
          <div className="checkoutProductInfo">
            <p className="checkoutProductTitle">{props.title}</p>
            <p className="checkoutProductPrice">
              <small>₹</small>
              <strong>{props.price}</strong>
            </p>
            <div className="chekoutProductRating">
              {Array(props.rating)
                .fill()
                .map((_, i) => {
                  return <p key={i}>⭐</p>;
                })}
            </div>
            {!props.hideButton &&(
            <button onClick={removeFromBasket}>Remove from Basket</button>
            )
            }
          </div>
        </motion.div>
    </>
  );
};

export default CheckoutProduct;
