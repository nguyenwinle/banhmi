import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import './sass/main.scss';
import Header from './Header'
import Home from './pages/Home'
import Checkout from './pages/Checkout'

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
