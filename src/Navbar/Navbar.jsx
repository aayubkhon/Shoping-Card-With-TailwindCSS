import React from 'react'
import { Search } from '@styled-icons/feather/Search'
import { ShoppingCart } from '@styled-icons/typicons/ShoppingCart'
import { useNavigate } from 'react-router-dom'
import Sliders from '../Sliders'

export const Nvabar = () => {
  const style = "text-[14px] cursor-pointer ml-[25px] font-[500] mobile:ml-[10px]"
  const navigate = useNavigate()
  return (
    <div className='navbar h-[60px] shadow-md relative z-10'>
      <div className='wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex 
      justify-between items-center mobile:pl-0 mobile:pr-0'>
  {/* left div */}
          <div className='left flex flex-1 items-center'>
            <p className='language cursor-pointer text-[16px] font-[500] mobile:hidden'>Search</p>
            <div className='searchInput flex border-[2px] border-solid
             border-lighgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all'>
            <input type="text" className='input outline-none mobile:w-[50px]'/>
            <Search className='search w-[20px] cursor-pointer'/>
          </div>
          </div>
       
{/* Logo */}
          <div className='center flex-1 flex justify-between'>
            <p className='logo font-bold text-lg mobile:text-sm '>Summer Kings</p>
            <button onClick={()=> navigate("/home")} className='logo font-bold text-lg mobile:text-sm '>Home</button>

          </div>
{/* Right div */}
          <div className='right flex flex-1 items-center justify-end 
          mobile:flex-[1.5] mobile:justify-center'>
            <button onClick={()=>navigate("/register")} className={style}>Register</button>
            <button onClick={()=>navigate("/login")} className={style}>Sign in</button>
           <div className={style}>
           <div badgeContent={2} color='primary'>
            <ShoppingCart className='shoping w-[20px]'/>
            </div>
           </div>
          </div>
        </div>
        {/* <Sliders/> */}
    </div>
  )
}

export default Nvabar