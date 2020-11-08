import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import Logo from './images/bread.png'

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();

            history.push('/login')
        }
    }

    return (
        <div className="header">
            <Link to="/"><img className="header__logo" src={Logo} /><p>Breaking Bread</p></Link>
            {/* <div className="header__search">
                <input className="header__searchInput" type="text" />
                <div className="header__searchIcon">
                    <SearchIcon />
                </div>
            </div> */}
            <div className="header__nav">
                <div className="header__option">
                    <Link to="/orders"><span className="header__optionLine">Your Orders</span></Link>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLine__count">
                            {basket ?.length}
                        </span>
                    </div>
                </Link>
                <div onClick={handleAuthentication} className="header__option">
                    <Link to={!user && "/login"}> <span className="header__optionLine">{user ? 'Sign Out' : 'Sign In'}</span> </Link>
                </div>
                <div className="header__option">
                    <Link to={!user && "/signup"}> <span className="header__optionLine">{user ? '' : 'Create an Account'}</span> </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;