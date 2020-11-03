import React from 'react';
import { useStateValue } from './StateProvider'

const Product = ({ id, title, description, image, price }) => {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the action.item to the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                description: description,
                image: image,
                price: price
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <h4>{title}</h4>
                <p className="product__Price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <img src={image} alt="title" />
            <p>{description}</p>
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    );
};

export default Product;