import React,{ useState } from 'react'

function Counter() {
  const [count,setCount] = useState(0)


  return (
    <div className='flex items-center justify-center text-2xl'>
    Quantity
    <div className='ml-5 shadow-md flex'>
        <div className='bg-[#8a4af3] text-white w-8 flex items-center 
        justify-center cursor-pointer rounded-l-md'>
           <button onClick={() => setCount(count -1)}>-</button>
        </div>
        <div className='w-8 flex items-center justify-center border-[1px] border-[#8a4af3]'>
           <p>{count}</p>
        </div>
        <div className='bg-[#8a4af3] text-white w-8 flex items-center 
        justify-center cursor-pointer rounded-r-md'>
            <button onClick={() => setCount(count +1)}>+</button>
        </div>
    </div>
</div>
  )
}

export default Counter