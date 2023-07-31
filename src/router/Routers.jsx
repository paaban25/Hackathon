import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import TourDetails from '../pages/TourDetails'
import Register from '../pages/Register'
import SearchResultList from '../pages/SearchResultList'
import Tours from '../pages/Tours'
const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/tour' element={<Tours/>}/ >
        <Route path='/home' element={<Home/>}/ >
        <Route path='/tours/:id' element={<TourDetails/>}/ >
        <Route path='/login' element={<Login/>}/ >
        <Route path='/register' element={<Register/>}/ >
        <Route path='/tours/search' element={<SearchResultList/>}/ >
    </Routes>
  )
}

export default Routers;
