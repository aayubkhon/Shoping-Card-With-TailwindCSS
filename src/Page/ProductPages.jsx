import React from 'react'
import Announce from '../Announce/index'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import NewsLeter from '../NewLetter'
import Product from '../Product/index'
import Counter from './Counter'

export default function ProductPages() {
  return (
    <div>
           <Announce/>
        <Navbar/>
        <div className='flex justify-center'>
            <div className='flex flex-1 items-center justify-start'>
                <img className='w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300' 
                src='https://i.pinimg.com/originals/4e/53/8a/4e538ac5f9708fa997882057c61f6633.png' alt='pro_img'/>
            </div>
            <div className='flex-[1.3] flex items-start justify-start flex-col mt-10'>
            <h1 className='title text-[40px] font-mono'>Jeans Hoody Original </h1>
            <p className='pr-[4rem] text-justify mt-4 font-mono'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas reiciendis harum deleniti. Vero ratione quas officia 
                aliquam explicabo velit, voluptatem dolorum cumque exercitationem consequuntur repudiandae nemo dolor tempore deserunt?
            </p>
            <p className='mt-7 text-3xl'>Price: <b>$70</b></p>

            {/* Colors variants */}
            <div className='flex text-2xl mt-7'>
                <p className='font-mono'>Colors</p>
                <div className='bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 
                 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]'></div>
                <div className='bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 
                 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]'></div>
                <div className='bg-yellow-400 w-[2rem] h-[2rem] rounded-full border-2 
                 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]'></div>
            </div>
            <div className='mt-7 text-2xl'>
                Size
                <select className='ml-5 border-2'>
                    <option selected disabled>Select</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </div>
            <div className='mt-5'>
                <Counter/>
            </div>
            <button className='btn mt-5'>Add to Cart</button>
            </div>
        </div>
        <NewsLeter/>
        <Footer/>
    </div>
  )
}
