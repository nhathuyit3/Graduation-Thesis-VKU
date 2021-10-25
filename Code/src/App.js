import './App.css';
import React from 'react';
import {  BrowserRouter , Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import NavbarCate from './components/navbar_category/Navbar_cate';
import Cart from './components/cart/Cart';
import Login from './components/login/Login';
import Mobile from './components/mobile/Mobile';
import Laptop from './components/laptop/Laptop';
import AboutUs from './components/about_us/AboutUs';
import Signup from './test/signUp/signup';

function App(){
  return(
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <NavbarCate />
        <Switch>
          <Route path="/shopingcart" component={Cart} />
          <Route path="/login" component={Signup} />
          <Route path="/mobile" component={Mobile} />
          <Route path="/laptop" component={Laptop} />
          <Route path="/aboutus" component={AboutUs} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;