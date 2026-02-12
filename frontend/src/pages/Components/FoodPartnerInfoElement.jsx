import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import api from '../../API/api'
import { foodPartnerInfo } from '../../API/getInfo'

const ProfilePage = () => {
  const [profile, setProfile] = useState(null)
  const [reels, setReels] = useState([])

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await api.get(foodPartnerInfo, { withCredentials: true })
        setProfile(res.data.foodPartner)
        console.log(res.data.foodPartner.reels)
        setReels(res.data.foodPartner.reels || [])
      } catch (err) {
        console.error(err)
      }
    }
    getProfile()
  }, [])

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-medium text-gray-600">Loading profile...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-10">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full w-32 h-32 shadow-md mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-800">{profile.fullName}</h1>
        <p className="text-gray-600">{profile.email}</p>
      </div>

      {/* Info Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile Information</h2>
        <div className="space-y-2 text-gray-600">
          <p><strong>Phone:</strong> {profile.phoneNumber}</p>
          <p><strong>Address:</strong> {profile.address}</p>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-center mb-10">
        <NavLink
          to="/foodPartner/createFood"
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
        >
          + Create Food
        </NavLink>
      </div>

      {/* Reels Grid */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Reels</h2>
        {reels.length === 0 ? (
          <p className="text-gray-500">No reels uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {reels.map((reel) => (
              <div
                key={reel._id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
             <img
                src={`${reel.video}?tr=w-400,h-250,cm-extract:frame-1000`}
                alt={reel.name}
                className="w-full h-48 object-cover rounded-lg shadow"
              />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-700">{reel.name}</h3>
                  <p className="text-sm text-gray-500">{reel.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfilePage