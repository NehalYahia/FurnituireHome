import React, { Component } from 'react'
import Banners from './components/Banners/Banners'
import Chooseus from './components/ChooseUs/Chooseus'
import Footer from './components/footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import AllProducts from './components/Products_today/AllProducts'
import AllSelectedItems from './components/SelectedItems/AllSelectedItems'
import Subscribe from './components/Subscribe/Subscribe'

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Header/>
        <Banners/>
        <AllSelectedItems/>
        <Chooseus/>
        <AllProducts/>
        <Subscribe/>
        <Footer/>
      </>
    )
  }
}

