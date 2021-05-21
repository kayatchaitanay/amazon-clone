import { ListItemAvatar } from '@material-ui/core';
import moment from 'moment';
import React from 'react'
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import './Order.css'

const Order = ({order}) => {
    return (
        <>
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM DO YYYY, h:mma")}</p>
            <p className='order__id'>
                <small>{order.id}</small>
            </p>
            {
                order.data.basket?.map((item, index) => {
                    return <CheckoutProduct
                                id={item.id}
                                key={index}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                hideButton
                            />
                })
            }

            <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <h3>Order Total: {value}</h3>
                      </>
                    )}
                    decimalScale={2}
                    value={order.data.amout / 100} // Part of the homework
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                  />

        </div>
        </>
    )
}

export default Order;