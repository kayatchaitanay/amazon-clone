import React from 'react'
import { propTypes } from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <>
            <div className="checkout">
                <div className="checkoutLeft">
                    <h2>Your shopping Basket</h2>
                    <small>{user?.email}</small>
                    <hr/>
                    {
                        basket.map((item, index) => {
                            return (
                                <CheckoutProduct
                                id={item.id}
                                key={index}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />)
                        })
                    }
                </div>
                <div className="checkoutRight ">
                    <Subtotal/>
                </div>
            </div>
        </>
    )
}

export default Checkout
