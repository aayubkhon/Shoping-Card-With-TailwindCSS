import React from 'react'
import { Search } from '@styled-icons/feather/Search'
import { ShoppingCart } from '@styled-icons/typicons/ShoppingCart'

export const Nvabar = () => {
  const style = "text-[14px] cursor-pointer ml-[25px] font-[500]"
  return (
    <div className='navbar h-[60px] shadow-md relative z-10'>
      <div className='wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex 
      justify-between items-center'>
  {/* left div */}
          <div className='left flex flex-1 items-center'>
            <p className='language cursor-pointer text-[16px] font-[500]'>Search</p>
            <div className='searchInput flex border-[2px] border-solid
             border-lighgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all'>
            <input type="text" className='input outline-none'/>
            <Search className='search w-[20px] cursor-pointer'/>
          </div>
          </div>
       
{/* Logo */}
          <div className='center flex-1 text-center'>
            <p className='logo font-bold text-lg'>Summer Kings</p>
          </div>
{/* Right div */}
          <div className='right flex flex-1 items-center justify-end'>
            <p className={style}>Register</p>
            <p className={style}>Sign in</p>
           <div className={style}>
           <div badgeContent={2} color='primary'>
            <ShoppingCart className='shoping w-[20px]'/>
            </div>
           </div>
          </div>
        </div>
    </div>
  )
}

export default Nvabar