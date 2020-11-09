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

const Nav = () => {
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
            <div className="nav">
                <div className="nav__nav icons">{user && <span onClick={toggleMenu}>{open ? <MenuOpenIcon /> : <MenuIcon />}</span>}<FacebookIcon /><InstagramIcon /><FastfoodIcon /></div>
                <div className="nav__nav center">
                    <Link to="/">
                        <img className="nav__logo" src={Logo} />
                        Breaking Bread</Link>
                </div>
                <div className="nav__nav right">

                    <Link to="/order">
                        <div className="nav__optionBasket">
                            <span className="nav__optionLine__count">
                                Order Now
                        </span>
                        </div>
                    </Link>
                </div>
            </div>
            <SubNav />
            <div className={`navDrawer ${open ? '' : 'hide'}`}>
                <ul>
                    <li>
                        <FastfoodIcon />
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

export default Nav;