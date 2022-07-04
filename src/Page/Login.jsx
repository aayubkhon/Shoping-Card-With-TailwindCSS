import React,{useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';



export default function Login() {
    const [userprofile,setUserProfile] = useState()
    const Navigate = useNavigate()
    const onSub = ()=>{
        JSON.parse(localStorage.getItem('user',userprofile))
        if(userprofile.login === userprofile.login && userprofile.password === userprofile.password ) {
            Navigate('/home')
        }
        else {
            alert('Xato')
        }
    }
    console.log(userprofile);
    const handleChange = (e) =>{
        setUserProfile(
            {
                ...userprofile,
            [e.target.name]:e.target.value
            }
        )
    }





  return (
    <div className='flex justify-center'>
        <div className='flex flex-col absolute top-[30%] 
        shadow-lg border-[2px] p-5 w-[60%] rounded-lg mobile:w-[90%]'>
            <text className='text-2xl'>Login</text>
            <div className='flex mt-3 '>
                <input type='text' name='username' onChange={handleChange} className='border-[2px] rounded-lg w-[100%] p-2 
                outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
                placeholder='username'/>
            </div>
            <div className='flex mt-3'>
                <input name='password' onChange={handleChange} className='border-[2px] rounded-lg w-[100%] p-2 
                outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
                placeholder='password'/>
            </div>
            <input onClick={onSub}  type="button" value='Login' className='btn mt-7
            hover:scale-[1.02]'/>
             <input onClick={()=>Navigate('/register')}  type="button" value='Register' className='btn mt-7
            hover:scale-[1.02]'/>
        </div>
    </div>
  )
}