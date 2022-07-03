import React from 'react'
import Announce from '../Announce/index'
import Categor from '../categorry'
import CategoryPage from '../CategoryPage'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import NewsLeter from '../NewLetter'
import ProductPages from '../Page/ProductPages'
import Product from '../Product/index'
import Sliders from '../Sliders'
 
export const Root = () => {
  return (
    <div>
        {/* <Announce/>
        <Navbar/>
        <Sliders/>
        <Categor/>
        <Product/>
        <NewsLeter/>
        <Footer/> */}
        {/* <CategoryPage/> */}
        <ProductPages/>

    </div>
  )
}

export default Root