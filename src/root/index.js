import React from 'react'
import Announce from '../Announce/index'
import Categor from '../categorry'
import CategoryPage from '../CategoryPage'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import NewsLeter from '../NewLetter'
import Cart from '../Page/Cart'
import Login from '../Page/Login'
import ProductPages from '../Page/ProductPages'
import Product from '../Product/index'
import Sliders from '../Sliders'
import Register from '../Page/Registar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
 
export const Root = () => {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router> */}
        <Announce/>
        <Navbar/>
        <Sliders/>
        <Categor/>
        <Product/>
        <CategoryPage/>
        <ProductPages/>
        <Cart/>
        <NewsLeter/>
        <Footer/>
    </div>
  )
}

export default Root