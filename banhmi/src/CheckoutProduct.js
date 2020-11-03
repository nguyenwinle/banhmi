import React from 'react';
import { useStateValue } from './StateProvider'

const CheckoutProduct = ({ id, image, title, price, description }) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove item
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
            title: title,
            description: description,
            image: image,
            price: price

        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt={title} className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__description">{description}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <button className="checkoutProduct__button" onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;