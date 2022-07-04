import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'



export default function Register() {
    const [username,setUsername] = useState()
    const Navigate = useNavigate()
    const onSubmit = () =>{
        localStorage.setItem('user',JSON.stringify(username))
        Navigate('/')
    }
    const handleChange = (e) =>{
        setUsername(
            {
                ...username,
            [e.target.name]:e.target.value
            }
        )
    }





  return (
    <div className='flex justify-center'>
        <div className='flex flex-col absolute top-[30%] 
        shadow-lg border-[2px] p-5 w-[60%] rounded-lg mobile:w-[90%]'>
            <text className='text-2xl'>Register</text>
            <div className='flex mt-3'>
            <input type='text' name='first name' onChange={handleChange} className='border-[2px] rounded-lg w-[100%] p-2 
                outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
                placeholder='first name'/>
                 <input type='text' name='last name' onChange={handleChange} className='border-[2px] rounded-lg w-[100%] p-2 
                outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200 ml-3'
                placeholder='last name'/>
            </div>
            <div className='flex mt-3 '>
                <input type='text' name='username' onChange={handleChange} className='border-[2px] rounded-lg w-[100%] p-2 
                outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
                placeholder='username'/>
            </div>
            <div className='flex mt-3'>
                <input name='password' onChange={handleChange} className='border-[2px] rounded-lg w-[100%] p-2 
                outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
                placeholder='password'/>
                  <input name='Confirm' onChange={handleChange} className='border-[2px] rounded-lg w-[100%] p-2 
                outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200 ml-3'
                placeholder='Confirm'/>
            </div>
            <input onClick={onSubmit}  type="button" value='Register' className='btn mt-7
            hover:scale-[1.02]'/>
            <input onClick={()=>Navigate('/')}  type="button" value='Login' className='btn mt-7
            hover:scale-[1.02]'/>
        </div>
        <div className=''></div>
    </div>
  )
}