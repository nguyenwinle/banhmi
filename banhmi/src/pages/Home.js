import React from 'react';
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../reducer'
import { useHistory } from 'react-router-dom'
import Product from '../Product'
import Hero from '../Hero'
import Menu from '../Menu'
import CheckoutProduct from '../CheckoutProduct'
import Card from '../Card'
import Track from '../images/tracking.png'
import Order from '../images/online-order.png'
import Carry from '../images/carry.png'

const Home = () => {
    const [{ basket }, dispatch] = useStateValue();

    const history = useHistory()

    return (
        <div className="home">
            <Hero />
            <div className="home__info">
                <Card
                    image={Track}
                    alt="track location"
                    title="Track Our Location"
                    description="Find us using the app."
                />
                <Card
                    image={Order}
                    alt="Order online"
                    title="Online Order"
                    description="Conveniently order online or through our app"
                />
                <Card
                    image={Carry}
                    alt="Pick up"
                    title="Pick Up and Enjoy"
                    description="Come pick your food once it is ready."
                />
            </div>
        </div>
    );
};

export default Home;