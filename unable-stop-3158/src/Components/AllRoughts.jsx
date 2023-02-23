import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Men from '../Pages/Men'
import Women from "../Pages/Women"
import Child from "../Pages/Child"
import Home from '../Pages/Home'


const AllRoughts = () => {
  return <Routes>
    {/* <Route path='/' element={<Home/>}></Route> */}
    <Route path='/women' element={<Women/>}></Route>
    <Route path='/men' element={<Men/>}></Route>
    <Route path='/child' element={<Child/>}></Route>
  </Routes>
}

export default AllRoughts