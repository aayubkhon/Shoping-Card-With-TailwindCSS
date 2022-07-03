import React,{useState} from 'react'
import { Close } from '@styled-icons/material-sharp/Close'


export const Announce = () => {
    const [style,setStyle] = useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center')

   const handleClose = () =>{
    setStyle(style + " hidden")
   }
  return (
   <div className={style}>
    <h2>Hurry up it's 40% off now</h2>
    <Close className='cursor-pointer w-8 ' onClick={handleClose} />
   </div>
  )
}

export default Announce