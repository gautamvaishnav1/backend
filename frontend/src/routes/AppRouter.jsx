import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import UserRegister from '../Auth/UserRegister'
import UserLogin from '../Auth/UserLogin'
import FoodPartnerRegister from '../Auth/FoodPartnerRegister'
import FoodPartnerLogin from '../Auth/FoodPartnerLogin'
import Footer from '../pages/Footer'
import UserInfoElement from '../pages/Components/UserInfoElement'
import CreateFood from '../pages/Components/CreateFood'
import ReelsWatch from '../pages/Components/ReelsWatch'
import FoodPartnerInfoElement from '../pages/Components/FoodPartnerInfoElement'

const AppRouter = () => {
    const role=localStorage.getItem('role')
    console.log(localStorage.getItem('role'))
  return (
    <Router>
        <Routes>
            <Route path='/' element={<ReelsWatch/>}></Route>
            {/* User */}
            <Route path='/user/register' element={<UserRegister />} />
            <Route path='/user' element={<UserInfoElement/>}></Route>
            <Route path='/user/login' element={<UserLogin />} />

            {/* food partner */}
            <Route path='/foodPartner/register' element={<FoodPartnerRegister />} />
            <Route path='/foodPartner/login' element={<FoodPartnerLogin />} />
              {  role==='foodPartner'
              &&<Route path='/foodPartner/createFood' element={<CreateFood/>}></Route>
            }
            <Route path='/foodPartner' element={<FoodPartnerInfoElement/>}></Route>
        </Routes>
        <Footer />
    </Router>

)
}

export default AppRouter