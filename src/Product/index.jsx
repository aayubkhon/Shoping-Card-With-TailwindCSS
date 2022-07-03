import React from 'react'
import {ApiProducts} from '../ApiFolder/ProductApi'
import Productas from '../Product/Productss'

export const Product = () => {
 return <div className='flex flex-wrap p-5 items-center justify-center'>
  {
    ApiProducts.map((product,index)=>(
      <Productas item={product} key={index}/>
    ))
  }
 </div>
}

export default Product