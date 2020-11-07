import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './sass/main.scss';
import Header from './Header'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'

function App() {
  //only run once when the app component loads
const [{}, dispatch] = useStateValue()
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
          <Route path="/login" exact component={Login} />
          <Route path="/" exact  >
            <Header />
            <Home />
          </Route>
          <Route path="/checkout" >
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
