import { React,useState } from 'react'
import {FavoriteBorder} from '@styled-icons/material/FavoriteBorder'
import { Search } from '@styled-icons/feather/Search'
import { ShoppingCart } from '@styled-icons/typicons/ShoppingCart'

export const Productas = ({item}) => {
  const [hoverEffect,setHoverEffect] = useState(' opacity-0');
  const handleHoverEffect = () =>{
    setHoverEffect(' opacity bg-rgba(0,0,0,0.2)]')
  }
  const handleHoverExit = () =>{
    setHoverEffect(' opacity-0')
  }

  const iconStyle =
  ("h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 cursor-pointer hover:bg-red-600 hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer")
  return (
    <div className='flex flex-1 items-center justify-center min-w-[300px] min-h-[350px] 
    overflow-hidden rounded-md shadow-lg m-2 relative' 
    onMouseEnter={handleHoverEffect}
    onMouseLeave={handleHoverExit}>
        <img className='Images w-[300px] h-[300px]' src={item.images} alt='product_img'/>
        <div className={`flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-200 ` + hoverEffect}>
          
          {/* iconStyle */}
          <div className={iconStyle}>
          <ShoppingCart />
          </div>
        <div className={iconStyle}>
            <FavoriteBorder/>
        </div>
        <div className={iconStyle}>
          <Search/></div>
        </div>
    </div>
  )
}

export default Productas
