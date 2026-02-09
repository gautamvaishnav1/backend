import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import UserRegister from '../Auth/UserRegister'
import UserLogin from '../Auth/UserLogin'
import FoodPartnerRegister from '../Auth/FoodPartnerRegister'
import FoodPartnerLogin from '../Auth/FoodPartnerLogin'
import Footer from '../pages/Footer'
import UserInfoElement from '../pages/Components/UserInfoElement'

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<div>Hello</div>}></Route>
            <Route path='/user/register' element={<UserRegister />} />
            <Route path='/user/login' element={<UserLogin />} />
            <Route path='/foodPartner/register' element={<FoodPartnerRegister />} />
            <Route path='/foodPartner/login' element={<FoodPartnerLogin />} />
            <Route path='/user' element={<UserInfoElement/>}></Route>
        </Routes>
        <Footer />
    </Router>

)
}

export default AppRouter