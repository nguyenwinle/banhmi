import React from 'react';
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../reducer'
import { useHistory } from 'react-router-dom'
import Product from '../Product'
import Hero from '../Hero'
import Menu from '../Menu'
import CheckoutProduct from '../CheckoutProduct'

const Home = () => {
    const [{ basket }, dispatch] = useStateValue();

    const history = useHistory()

    return (
        <div className="home">
            <Hero />

        </div>
    );
};

export default Home;