import React, { Component } from 'react'
import "./custom.scss";
import Banners from './components/Banners/Banners'
import Chooseus from './components/ChooseUs/Chooseus'
import Footer from './components/footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import AllProducts from './components/Products_today/AllProducts'
import AllSelectedItems from './components/SelectedItems/AllSelectedItems'
import Subscribe from './components/Subscribe/Subscribe'
import ShoppingCartPage from "./components/Cart/ShoppingCartPage"
import CheckoutPage from "./components/Cart/CheckoutPage"
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Header/>
        <Banners/>
        <AllSelectedItems/>
        <Chooseus/>
        <AllProducts/>
        <Subscribe/>
        <Footer/>
        <Route path="/ShoppingCartPage" component={ShoppingCartPage}/>
        <Route exact path='/Checkout' component={CheckoutPage}/>
      </BrowserRouter>
    )
  }
}

