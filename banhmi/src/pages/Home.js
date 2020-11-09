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
            {/* <div className="home__about">
                <h2>What is Banh Mi?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="home__row">
                    <div className="col order">
                        <h4>Online Order</h4>
                        <p>Quick and easy online ordering</p>
                        <a href="/">Order Now</a>
                    </div>
                    <div className="col apparel">
                        <h4>Apparel</h4>
                        <p>Support and help spread the love</p>
                        <p>Redeem a free sandwich with purchase of an item.</p>
                        <a href="/">Learn More</a>
                    </div>
                    <div className="col download">
                        <h4>Download Our App</h4>
                        <p>Get the best experience by downloading the app. Track our location in real time. Place orders and get notified.</p>
                        <a href="/">Get the app -></a>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Home;