import React, { useState, useEffect } from 'react';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from '../CheckoutProduct'
import { Link, useHistory } from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../reducer'
import axios from 'axios'
import { instance } from '../axios'
import { db } from '../firebase'

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue()
    const history = useHistory();

    const stripe = useStripe()
    const elements = useElements()

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)

    //whenever there is a change
    useEffect(() => {
        // generate the special stripe secret which allows us to chargr customer
        const getClientSecret = async () => {
            // make request for secret
            const response = await axios({
                method: 'post',
                // stripe expects the total amount in sub units// get dolllars
                url: `/payments/create?total=${getBasketTotal(basket)} * 100`
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
        event.preventDefault()
        setProcessing(true)



        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
            db
                .collection('users')
                .doc(user ?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET',
            })

            history.replace('/orders')
        })
    }

    const handleChange = event => {
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")
    }

    console.log(basket)
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout (<Link to="/checkout">{basket ?.length} {basket ?.length > 1 ? 'items' : 'item'}</Link>)</h1>
                {/* <div className="payment__section">
                    //address
                    <div className="payment__title">
                        Delivery Address
                    </div>
                    <div className="payment__address">
                        <p>{user ?.email}</p>
                        <p>address</p>
                        <p>address</p>
                    </div>
                </div> */}
                <div className="payment__section">
                    <div className="payment__title">
                        Review Items
                    </div>
                </div>
                <div className="payment__items">
                    {basket ?.map((item) => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            description={item.description}
                        />
                    ))}
                </div>
                <div className="payment__section">
                    <div className="payment__title">Payment Method</div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement
                                onChange={handleChange}
                            />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    //optional chaining
                                    renderText={(value) => (<p>Order Total: <strong>{value}</strong></p>)}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                >
                                </CurrencyFormat>
                                <button disabled={processing || disabled || succeeded}><span>{processing ? <p>Processing</p> : "Make Payment"}</span></button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;