import React from 'react'
import { useStateValue } from '../StateProvider'
import './product.css'
import { motion } from "framer-motion";
import { duration } from '@material-ui/core';

const Product = (props) => {
    // let price = props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // let price = props.price.toString().toLocaleString();

    const [{basket}, dispatch] = useStateValue();

    
  const item = {
    hidden: { y: 550, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {duration: 0.5, ease: 'easeOut'}
    }, 
    hover: {
        boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.8)",
    }
  }


    const addToBasket = () => {
        // disapatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: props.id,
                title: props.title,
                image: props.img,
                price: props.price,
                rating: props.rating
            }
        });
    }

    return (
        <>
        <motion.div className="product" variants={item} animate="visible" initial="hidden" whileHover="hover">
            <div className="productInfo">
                <p>{props.title}</p>
                <p><small>₹</small><strong>{props.price}</strong></p>
            <div className="productRating">
                {
                    Array(props.rating).fill().map((_, i)=>{
                        return <p key={i}>⭐</p>
                    })
                }
            </div>
        </div>
            <img src={props.img} alt="productImage" />
            <button onClick={addToBasket}>Add To Cart</button>
        </motion.div>
        </>
    )
}

export default Product
