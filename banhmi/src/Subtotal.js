import React from 'react';
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
import { useHistory } from 'react-router-dom'

const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();

    const history = useHistory()

    return (
        <div className="subtotal">
            <CurrencyFormat
                //optional chaining
                renderText={(value) => (<p>Subtotal ({basket ?.length} {basket ?.length > 1 ? 'items' : 'item'}): <strong>{value}</strong></p>)}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            >
            </CurrencyFormat>
            <button onClick={e => { basket.length > 0 ? history.push("/payment") : e.preventDefault() }}>{basket.length > 0 ? 'Proceed to Checkout' : 'Basket is Empty'}</button>
        </div>
    );
};

export default Subtotal;