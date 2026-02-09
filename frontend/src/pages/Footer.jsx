import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { MdOndemandVideo } from 'react-icons/md';
import { AiOutlineLogout } from 'react-icons/ai';
import api from '../API/api';
import { userLogoutAPI } from '../API/authAPI';

const Footer = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await api.post(userLogoutAPI)
      navigate('/user/login')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <nav
      className="
        fixed bottom-2 left-1/2 -translate-x-1/2
        w-full sm:w-[380px]
        bg-white shadow-lg border
        rounded-2xl
        px-4 py-2
        flex items-center justify-between
      "
    >
      <NavLink
        to="/user"
        className={({ isActive }) =>
          `text-2xl ${isActive ? "text-green-600" : "text-gray-500"}`
        }
      >
        <CgProfile />
      </NavLink>

      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-2xl ${isActive ? "text-green-600" : "text-gray-500"}`
        }
      >
        <MdOndemandVideo />
      </NavLink>
        hii
      <button
        onClick={handleLogout}
        className="text-2xl text-red-500 hover:text-red-600 transition"
        title="Logout"
      >
        <AiOutlineLogout />
      </button>
    </nav>
  )
}

export default Footer
