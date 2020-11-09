import React, { useState, useEffect } from 'react';
import { useStateValue } from './StateProvider'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Product = ({ id, title, description, image, price, itemNumber }) => {
    const [state, dispatch] = useStateValue();
    const [overlay, setOverlay] = useState(false)

    const addToBasket = () => {
        // dispatch the action.item to the data layer

        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                itemNumber: itemNumber,
                title: title,
                description: description,
                image: image,
                price: price
            }
        })

        setOverlay(true)

    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setOverlay(false);
        }, 500);
    }, [overlay])

    return (
        <div onClick={addToBasket} className="product">
            <div className="itemNumber"><p>{itemNumber}</p></div>
            <div className="product__info">
                <h4>{title}</h4>
                <p className="product__Price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p>{description}</p>
            </div>
            <img src={image} alt="title" />
            {overlay && <div className="added"><span><CheckCircleIcon /></span></div>}
        </div>
    );
};

export default Product;