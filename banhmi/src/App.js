import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import './sass/main.scss';
import Header from './Header'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Login from './pages/Login'

function App() {
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
