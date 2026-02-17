import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { MdOndemandVideo } from 'react-icons/md';
import { AiOutlineLogout } from 'react-icons/ai';
import api from '../API/api';
import { foodPartnerLogoutAPI, userLogoutAPI } from '../API/authAPI';

const Footer = () => {
  const navigate = useNavigate()
  const role=localStorage.getItem('role')

  const handleLogout = async () => {
    try {
      if(role==='user'){
        
      await api.post(userLogoutAPI);
      localStorage.clear();
      navigate('/user/login');
      }
      else if(role==='foodPartner'){
        await api.post(foodPartnerLogoutAPI)
        localStorage.clear();
        navigate('/foodPartner/login')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <nav
  className="
    fixed bottom-0 left-0 right-0
    w-full
    bg-black/80 shadow-lg
    border-t
    px-6 py-3
    flex items-center justify-evenly
    z-50

    sm:w-[90%] sm:left-1/2 sm:-translate-x-1/2
    md:w-[70%] md:left-1/2 md:-translate-x-1/2
    lg:w-[50%] lg:left-1/2 lg:-translate-x-1/2
  "
>
  <NavLink
    to={`${role==='foodPartner'?'/foodPartner':'/user'}`}
    className={({ isActive }) =>
      `text-2xl ${isActive ? "text-green-600" : "text-gray-400"}`
    }
  >
    <CgProfile />
  </NavLink>

  <NavLink
    to="/"
    className={({ isActive }) =>
      `text-2xl ${isActive ? "text-green-600" : "text-gray-400"}`
    }
  >
    <MdOndemandVideo />
  </NavLink>

  {role && (
    <button
      onClick={handleLogout}
      className="text-2xl text-red-500 hover:text-red-600 transition"
      title="Logout"
    >
      <AiOutlineLogout />
    </button>
  )}
</nav>
  )
}

export default Footer
