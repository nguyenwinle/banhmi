import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './sass/main.scss';
import Header from './Header'
import Nav from './Nav'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Payment from './pages/Payment'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Orders from './pages/Orders'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Order from './pages/Order'

const promise = loadStripe("pk_test_51HkyuSBH105OqfN2LWMi53AOKVQRinVC0unHVRfsNUj9Dy1fo6OoMLnJ47bkM34vSWna9oZ1kUW58mh4rRIHuWsh00VMr18AUR")

function App() {
  //only run once when the app component loads
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // the user was or is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []) // refire code if something is passed in

  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path={"/login"} exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/" exact  >
            <Nav />
            <Home />
          </Route>
          <Route path="/checkout" >
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment" >
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/order" >
            <Header />
            <Order />
          </Route>
          <Route path="/orders" >
            <Header />
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
