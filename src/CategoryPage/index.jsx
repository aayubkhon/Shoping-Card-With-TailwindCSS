import React from 'react'
import Announce from '../Announce/index'
import Navbar from '../Navbar/Navbar'
import Product from '../Product/index'
import NewsLeter from '../NewLetter'
import Footer from '../Footer/Footer'


export default function CategoryPage() {
  return (
    <div>
        <Announce/>
        <Navbar/>
        <div className='flex flex-col p-5'>
            <h1 className='text-[30px]'>Mens's Cloth</h1>
            <div className='flex items-center justify-between mt-3'>
                <div className='flex'>
                    <p>Filter by</p>
                    <select className='ml-3 border-2 border-silver'>
                        <option selected disabled>Size</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                    <select className='ml-3 border-2 border-silver'>
                        <option selected disabled>Color</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Yellow</option>
                        <option>White</option>
                    </select>
                </div>
                <div className='flex'>
                    <h2>Sort by</h2>
                    <select className='ml-3 border-2 border-silver'>
                        <option>Newset first</option>
                        <option>Oldest firs</option>
                        <option>Price Asc</option>
                        <option>Price des</option>
                    </select>
                </div>
            </div>
        </div>

        <Product/>
        <NewsLeter/>
        <Footer/>
    </div>
  )
}
