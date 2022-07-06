import React from 'react'
import { useNavigate } from 'react-router-dom'



export const Category = ({item}) => {
const Navigate = useNavigate()


  return (
   <div>
     <div className='flex-1 m-2 shadow-lg rounded-md overflow-hidden relative'>
        <img className=' w-[100%]' src={item.img} alt='cate_img'/>
        <div className='flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col'>
            <h2 className='text-white font-bold text-[30px] font-mono'>{item.title}</h2>
        <button onClick={()=>Navigate('/buypro')} className='btn'>See more</button>
        </div>
    </div>
   </div>
  )
}

export default Category