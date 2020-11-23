import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import Logo from './images/hotbread.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import SubNav from './SubNav'

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open)
    }
    const history = useHistory();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();

            history.push('/login')
        }
    }

    return (
        <>
            <div className="header">
                <div className="header__nav icons"><span onClick={toggleMenu}>{open ? <MenuOpenIcon /> : <MenuIcon />}</span><FacebookIcon /><InstagramIcon /><FastfoodIcon /></div>
                <div className="header__nav center">
                    <Link to="/">
                        <img className="header__logo" src={Logo} />
                        Breaking Bread</Link>
                    {/* <div className="header__search">
                <input className="header__searchInput" type="text" />
                <div className="header__searchIcon">
                    <SearchIcon />
                </div>
            </div> */}
                </div>
                <div className="header__nav right">
                    {/* <div onClick={handleAuthentication} className="header__option">
                    <Link to={!user && "/login"}> <span className="header__optionLine">{user ? 'Sign Out' : 'Sign In'}</span> </Link>
                </div>
                <div className="header__option">
                    <Link to={!user && "/signup"}> <span className="header__optionLine">{user ? '' : 'Create an Account'}</span> </Link>
                </div>
                <div className="header__option">
                    <Link to="/orders"><span className="header__optionLine">Your Orders</span></Link>
                </div> */}
                    <div className="header__name">
                        <p>{user ? user.displayName : 'Guest'}</p>
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
            <div className={`navDrawer ${open ? '' : 'hide'}`}>
                <ul>
                    <li>
                        <HomeIcon />
                        <Link to="/"><p>Home</p></Link>
                    </li>
                    <li>
                        <FastfoodIcon />
                        <Link to="/order"><p>Order Now</p></Link>
                    </li>
                    <li>
                        <ShoppingCartIcon />
                        <Link to="/orders"><p>Your Orders</p></Link>
                    </li>
                    <li>
                        <SettingsIcon />
                        <Link to="/settings"><p>Settings</p></Link>
                    </li>
                    <li>
                        <AccountCircleIcon />
                        <Link onClick={handleAuthentication} to={!user && "/login"}><p>{user ? 'Sign Out' : 'Sign In'}</p></Link>
                    </li>
                </ul>



            </div>
        </>
    );
};

export default Header;