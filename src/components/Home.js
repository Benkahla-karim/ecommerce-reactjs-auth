import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Products from './Products'
import Bagitems from './Bagitems'
import Login from './Login'
const Home = () => {
  return (
    <div className='Home'>
      <Routes>
      <Route path='/' element={<Products />} />
        <Route path='/bag' element={<Bagitems/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default Home