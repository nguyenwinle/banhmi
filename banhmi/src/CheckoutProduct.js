import React from 'react';
import { useStateValue } from './StateProvider'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const CheckoutProduct = ({ id, image, title, price, description, hideButton }) => {
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
                <div className="checkoutProduct__top">
                    <p className="checkoutProduct__title">{title}</p>
                    <p className="checkoutProduct__price">
                        $ {price}
                    </p>
                </div>
                <p className="checkoutProduct__description">{description}</p>
                {!hideButton && (
                    <div className="remove-button">
                        <button className="checkoutProduct__button" onClick={removeFromBasket}><DeleteForeverIcon /> <span>Remove</span></button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutProduct;