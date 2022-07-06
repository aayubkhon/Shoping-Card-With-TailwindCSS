import React from 'react'
import Announce from '../Announce/index'
import Categor from '../categorry'
import CategoryPage from '../CategoryPage'
import Navbar from '../Navbar/Navbar'
import Login from '../Page/Login'
import Register from '../Page/Registar'
import Home from '../Home/index'
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
 
export const Root = () => {
  return (
    <div>
      <Router>
      <Announce/>
          <Navbar/>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/home' element={<Home/>}/>
          <Route  path='/register' element={<Register/>}/>
          <Route  path='/buypro' element={<CategoryPage/>}/>
          <Route  path='/categor' element={<Categor/>}/>
          <Route  path='/register' element={<Register/>}/>
          <Route  path='/Navbar' element={<Navbar/>}/>
          <Route  path='/login' element={<Login/>}/>
        </Routes>
        </Router>
      
    </div>
  )
}

export default Root