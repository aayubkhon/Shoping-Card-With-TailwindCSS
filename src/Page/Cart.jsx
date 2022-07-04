import React from 'react'
import Announce from '../Announce/index'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import NewsLeter from '../NewLetter'
import Counter from './Counter'
function Cart() {
  return (
    <div>
          <Announce/>
        <Navbar/>
        <div className='p-6'>
            <div className='flex justify-center text-5xl'>
                Cart</div>

                <div className='flex items-center justify-between mt-5 mobile:flex-col'>
                    <button className='btn bg-white text-[#8a4af3]
                     border-2 border-[8a4af3] hover:bg-white '>
                        Continue Shoping
                        </button>
                        <div className='flex underline text-lg hover:cursor-pointer mobile:mt-3 mobile:mb-3'>
                            <p>Items in your Cart: 3</p>
                            <p className='ml-6'>Whitlist Item: 0</p>
                        </div>
                    <button className='btn'>Checkout</button>
                </div>
                {/* central */}
                <div className='flex mt-7 mobile:flex-col'>
                    <div className='flex flex-col flex-1 '>
                        {/* List of Products div */}
                    <div className='flex w-[100%] h-auto items-center mobile:flex-col'>
                        <div className='product flex self-start pl-5'>

                            <img className='w-[7.2rem] h-[40%] rounded-lg 
                            shadow-lg hover:scale-[1.1] ease-in duration-300' 
                            src='https://n1.sdlcdn.com/imgs/h/z/e/Generic-Black-SDL588775230-3-8f0ec.JPEG'
                             alt='product_images'/>
                            <div className='desc flex flex-col ml-5 mt-2 h-auto 
                            justify-between '>
                                <p>
                                    <b className='mr-2'>ID:</b>1234567
                                </p>
                                <p>
                                    <b className='mr-2'>Product:</b>Black Punk Jacket
                                </p>
                                <p className='flex items-center justify-start'>
                                    <b className='mr-2'>Color:</b>
                                    <div className='rounded-full border-2 p-[10px] cursor-pointer
                                     bg-black ml-l w-[20px] h-[20px] '></div>
                                </p>
                                <p>
                                    <b className='mr-2'>Size:Md</b>
                                </p>
                            </div>
                        </div>
                        <div className='b flex flex-col justify-center items-center flex-auto mobile:mt-3'>
                            <Counter/>
                            <p className='flex items-center justify-center text-4xl mt-3'>
                                <b>$90</b>
                            </p>
                        </div>
                    </div>
                    <hr className='mt-7 mb-7'/>
                    {/* 2nd product */}
                    <div className='flex w-[100%] h-auto items-center mobile:flex-col '>
                        <div className='product flex self-start pl-5'>

                            <img className='w-[7.2rem] h-[40%] rounded-lg 
                            shadow-lg hover:scale-[1.1] ease-in duration-300' 
                            src='https://img.joomcdn.net/273da2cf4f19886fe4da3b1d268451583cf6f1a4_original.jpeg'
                             alt='product_images'/>
                            <div className='desc flex flex-col ml-5 mt-2 h-auto 
                            justify-between '>
                                <p>
                                    <b className='mr-2'>ID:</b>1234567
                                </p>
                                <p>
                                    <b className='mr-2'>Product:</b>T-Shirt Polo Men's
                                </p>
                                <p className='flex items-center justify-start'>
                                    <b className='mr-2'>Color:</b>
                                    <div className='rounded-full border-2 p-[10px] cursor-pointer
                                      ml-l w-[20px] h-[20px]'></div>
                                </p>
                                <p>
                                    <b className='mr-2'>Size: Lg</b>
                                </p>
                            </div>
                        </div>
                        <div className=' flex flex-col justify-center items-center flex-auto mobile:mt-3'>
                            <Counter/>
                            <p className='flex items-center justify-center text-4xl mt-3'>
                                <b>$90</b>
                            </p>
                        </div>
                    </div>
                    <hr className='mt-7 mb-7'/>
                    </div>
                    <div className=' p-5  flex-[0.4] w-auto
                     h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg flex flex-col text-center'>
                        <h1 className='text-[2rem] font-serif'>Summary</h1>
                        <div className='flex justify-between mt-3 w-[100%]'>
                            <p>Subtital</p>
                            <p>$150</p>
                        </div>
                        <div className='flex justify-between mt-3 w-[100%]'>
                            <p>Shipping</p>
                            <p>$50</p>
                        </div>
                        <div className='flex justify-between mt-3 w-[100%]'>
                            <p>Shipping Discount</p>
                            <p>-$30</p>
                        </div>
                        <div className='flex justify-between mt-3 w-[100%] text-3xl font-bold'>
                            <p>Total</p>
                            <p>$120</p>
                        </div>
                    </div>
                </div>
        </div>


        {/* <NewsLeter/>
        <Footer/> */}
    </div>
  )
}

export default Cart