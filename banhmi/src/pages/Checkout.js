import React from 'react';
import Subtotal from '../Subtotal'
import CheckoutProduct from '../CheckoutProduct'
import { useStateValue } from '../StateProvider'
import { user } from '../firebase'

const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <div>
                    <div className="checkout__basket">
                        <h3>Hello {user?.email}</h3>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    numberItem={item.numberItem}
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                    price={item.price}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
};

export default Checkout;