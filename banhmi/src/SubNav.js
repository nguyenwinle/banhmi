import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'

const SubNav = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();

            history.push('/login')
        }
    }
    return (
        <>
            {
                !user &&
                <div className="subNav">
                    <div onClick={handleAuthentication} className="header__option">
                        <Link to={!user && "/login"}> <span className="header__optionLine">{user ? 'Sign Out' : 'Sign In'}</span> </Link>
                    </div>
                    <div className="header__option">
                        <Link to={!user && "/signup"}> <span className="header__optionLine">{user ? '' : 'Sign Up'}</span> </Link>
                    </div>
                    {/* <div className="header__option">
                <Link to="/orders"><span className="header__optionLine">Your Orders</span></Link>
            </div> */}
                </div>
            }
        </>
    );
};

export default SubNav;