import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) auth.signOut();
    }

    return (
        <div className="header">
            <Link to="/"><img className="header__logo" src="https://cdn0.iconfinder.com/data/icons/foods-and-meals-1/24/food-sandwich-baguette-512.png" /><p>Breaking Bread</p></Link>
            {/* <div className="header__search">
                <input className="header__searchInput" type="text" />
                <div className="header__searchIcon">
                    <SearchIcon />
                </div>
            </div> */}
            <div className="header__nav">
                <div onClick={handleAuthentication} className="header__option">
                    <Link to={!user && "/login"}> <span className="header__optionLine">{user ? 'Sign Out' : 'Sign In'}</span> </Link>
                </div>
                <div className="header__option">
                    <span className="header__optionLine">Orders</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLine__count">
                            {basket ?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;