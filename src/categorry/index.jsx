import React,{useState} from 'react'
import { ApiCategories } from '../ApiFolder/CategorysApi'
import Category from '../categorry/Category'

export const Categor = () => {
const [Api,setApi] = useState(ApiCategories)

  return (
    <div className="Container flex justify-between items-center p-5 mobile:flex-col">
      {
        Api.map((category,value)=>{
          return (<Category item={category} key={value}/>)
        })
      }
    </div>
  )
}

export default Categor