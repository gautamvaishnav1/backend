import React, { useEffect, useState } from 'react'
import api from '../../API/api'
import { UserInfo } from '../../API/getInfo'

const UserInfoElement = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await api.get(UserInfo)
        setUser(res.data.user)
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  }, [])

  

  return (
    <div className="relative max-w-md mx-auto h-150 mt-6 p-4 rounded-2xl shadow bg-white">
      {/* Avatar - top right */}
      <img
        src={`https://api.dicebear.com/7.x/initials/svg?seed=${user?.fullName || "User"}`}
        alt="avatar"
        className="absolute top-4 right-4 w-16 h-16 rounded-full border object-cover bg-gray-100"
      />

      {/* Info */}
      <div className="pr-20 space-y-2">
        <h1 className="text-xl font-semibold">
          {user?.fullName || "—"}
        </h1>
        <p className="text-sm text-gray-600">
          {user?.email || "—"}
        </p>

       
      </div>
    </div>
  )
}

export default UserInfoElement
