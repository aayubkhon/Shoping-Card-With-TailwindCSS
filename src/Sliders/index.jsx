import React,{useState} from 'react'
import {ArrowLeft} from '@styled-icons/evaicons-solid/ArrowLeft'
import {ArrowRight} from '@styled-icons/evaicons-solid/ArrowRight'
import {ApiSlides} from '../ApiFolder/SliderApi'
import './Slid.css'


export const Sliders = () => {
    // useState 
    const [slide] = useState(ApiSlides)
    const [activeSlide,setActiveSlide] = useState(0)


  const ArrowStyle = "rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer w-[30px]";

const NextSlide = () =>{
  if(activeSlide === slide.length -1)
  {
    setActiveSlide(0)
  }
  else
  {
    setActiveSlide(activeSlide +1)
  }
}

const prefSlide = () =>{
  if(activeSlide === 0){
    setActiveSlide(slide.length -1)
  }
  else
  {
    setActiveSlide(activeSlide -1)
  }
}
  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between">
      <div className="leftarrow ">
        <ArrowLeft className={ArrowStyle} onClick={prefSlide} />
      </div> 
      {slide.map((slide,value) => {
        if(value === activeSlide){
          return (
            <div key={value.id} className={`wrapper flex w-[100%] h-[500px] justify-center 
       items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px
        overflow-hidden relative `+ slide.background}>
          <div className='slide flex items-center justify-center h-[100%]'>
            <div className='forImage flex flex-1 justify-center items-center h-[100%]'>
              <img className='image h-[100%] object-cover' src={slide.src}
              alt='slide_Image'/>
            </div>
            <div className='dexcription flex flex-col flex-1 place-items-start justify-center -ml-11 '>
              <h2 className='text-[55px] font-mono '>{slide.content.h2}</h2>
              <p className='text-[30px] font-mono '>{slide.content.p}</p>
              <button className='btn'>Shop Now</button>
            </div>
          </div>
        </div>
          )
        }
      })}
      <div className="rightarrow">
        <ArrowRight className={ArrowStyle} onClick={NextSlide} />
      </div>
    </div>
  )
}

export default Sliders