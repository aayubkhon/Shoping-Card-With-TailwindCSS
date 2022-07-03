import React from 'react'
import {Send} from '@styled-icons/boxicons-solid/Send'

function NewsLeter() {
  return (
    <div className='flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#9b62f6]'>
        <h1 className='text-[50px] font-bold font-mono text-white'>
            A/C Coming Soon!
        </h1>
        <h2 className='text-[20px] mt-2 font-mono selection '>
            Always in touch with us, for your favorite products
        </h2>
        <div className='flex mt-[3rem] items-center justify-between min-w-[30rem] 
        min-h-[2rem] bg-white border-[#ccccccc] rounded-[5px] overflow-hidden'>
            <input 
            type="text"
            placeholder='email'
            className='border-none pl-[20px] flex-[7] outline-none h-[100%]' />
            <button className='bg-[#4caf50] flex-1'>
                <Send className='text-white h-[100%] w-[60%]'/>
            </button>
        </div>
    </div>
  )
}

export default NewsLeter