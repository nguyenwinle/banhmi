import React from 'react';
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'

const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                //optional chaining
                renderText={(value) => (<p>Subtotal ({basket ?.length} items): <strong>{value}</strong></p>)}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            >
            </CurrencyFormat>
            <button>Proceed to Checkout</button>
        </div>
    );
};

export default Subtotal;