import React from 'react'
import NewsLeter from '../NewLetter'
import Footer from '../Footer/Footer'
import Sliders from '../Sliders'
import Product from '../Product/index'
import Categor from '../categorry'



export default function Home() {
  return (
    <div>
          <Sliders/>
          <Categor/>
          <Product/>
          <NewsLeter/>
          <Footer/>
    </div>
  )
}
