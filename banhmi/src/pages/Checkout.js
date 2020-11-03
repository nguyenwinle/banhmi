import React from 'react';
import Subtotal from '../Subtotal'
import CheckoutProduct from '../CheckoutProduct'
import { useStateValue } from '../StateProvider'

const Checkout = () => {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <div>
                    <div className="checkout__basket">
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
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