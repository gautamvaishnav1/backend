import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import api from '../../API/api'

const ProfilePage = () => {
  const{id}= useParams()
  const role=localStorage.getItem('role')
  const [profile, setProfile] = useState(null)
  const [reels, setReels] = useState([])

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await api.get(`/api/found/foodPartner/${id}`,{withCredentials:true})
        setProfile(res.data.foodPartner)
        setReels(res.data.foodPartner.reels || [])
      } catch (err) {
        console.error(err)
      }
    }
    getProfile()
  }, [id])

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-medium text-gray-600">Loading profile...</p>
      </div>
    )
  }

  return (
  <div className="min-h-screen bg-gray-50 p-8">
  {/* Profile Section with all info */}
  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
    
    {/* Info (left on larger screens, stacked with photo on mobile) */}
    <div className="order-2 md:order-1 text-center md:text-left md:flex-1 space-y-2 mt-6 md:mt-0">
      <h1 className="text-3xl font-bold text-gray-800">{profile.fullName}</h1>
      <p className="text-gray-600">{profile.email}</p>
      <p className="text-gray-600"><strong>Phone:</strong> {profile.phoneNumber}</p>
      <p className="text-gray-600"><strong>Address:</strong> {profile.address}</p>
    </div>

    {/* Avatar (right on larger screens, stacked above info on mobile) */}
    <div className="order-1 md:order-2 md:ml-8 flex justify-center md:justify-end">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="rounded-full w-32 h-32 md:w-40 md:h-40 shadow-md"
      />
    </div>
  </div>

  {/* Reels Grid */}
  <div className="max-w-5xl mx-auto mt-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Reels</h2>
    {reels.length === 0 ? (
      <p className="text-gray-500">No reels uploaded yet.</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reels.map((reel) => (
          <div
            key={reel._id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <video
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