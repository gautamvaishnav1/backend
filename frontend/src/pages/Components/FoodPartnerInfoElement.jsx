import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import api from '../../API/api'
import { foodPartnerInfo } from '../../API/getInfo'

const ProfilePage = () => {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await api.get(foodPartnerInfo, { withCredentials: true })
        setProfile(res.data.foodPartner)
      } catch (err) {
        console.error(err)
      }
    }
    getProfile()
  }, [])

  if (!profile) {
    return <div>Loading profile...</div>
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {/* Dummy Profile Picture */}
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="rounded-full mb-4"
      />

      {/* Profile Info */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
        <p><strong>Full Name:</strong> {profile.fullName}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone Number:</strong> {profile.phoneNumber}</p>
        <p><strong>Address:</strong> {profile.address}</p>
      </div>

      {/* NavLink to Create Food */}
      <NavLink
        to="/foodPartner/createFood"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Create Food
      </NavLink>
    </div>
  )
}

export default ProfilePage