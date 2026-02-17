import React, { useEffect, useState } from 'react'
import api from '../../API/api'
import { UserInfo } from '../../API/getInfo'
import { GiSelfLove } from 'react-icons/gi'
import { LuSave } from 'react-icons/lu'
import { data } from 'react-router-dom'

const UserInfoElement = () => {
  const [user, setUser] = useState(null)
  const [likeReels, setLikeReels] = useState([])
  const [saveReels,setSaveReels]=useState([])
    const [selectedTab, setSelectedTab] = useState(null)
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await api.get(UserInfo,{withCredentials:true})
        setUser(res.data.user)
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  }, [])

  const handleLikeReel=async(id)=>{
    try {
      const res=await api.get(`/api/user/like/${id}`,{withCredentials:true})
        setLikeReels(res.data.reels)
        setSelectedTab('like')
    } catch (error) {
      console.log(error)
    }
  }

  const handleSaveReel=async(id)=>{
    console.log(id);
    try{
      
    const res=await api.get(`/api/user/save/${id}`,{withCredentials:true})
    console.log(res.data)
    setSaveReels(res.data.reels)
    setSelectedTab('save')
    }
    catch(err){
      console.log(err)
    }
  }
const reelToShow=selectedTab==='like'?likeReels:selectedTab==='save'?saveReels:[]
  return (
  
    <div className="relative mx-auto mt-6 p-4 rounded-2xl shadow bg-white 
                w-full sm:max-w-md md:max-w-lg lg:max-w-2xl h-auto">

  {/* Avatar - top right */}
  <img
    src={`https://api.dicebear.com/7.x/initials/svg?seed=${user?.fullName || "User"}`}
    alt="avatar"
    className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
               rounded-full border object-cover bg-gray-100"
  />

  {/* Info */}
  <div className="pr-20 space-y-2">
    <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold">
      {user?.fullName || "—"}
    </h1>
    <p className="text-xs sm:text-sm lg:text-base text-gray-600">
      {user?.email || "—"}
    </p>
  </div>
  {/* Reels / Actions */}
  <div className="grid grid-cols-2 gap-4 mt-10 
                  text-xl sm:text-2xl lg:text-3xl">
    <button className="flex justify-center" onClick={()=>handleLikeReel(user.id)} >
      <GiSelfLove className="cursor-pointer hover:text-pink-500 transition" />
    </button>
    <button className="flex justify-center" onClick={()=>handleSaveReel(user.id)} >
      <LuSave className="cursor-pointer hover:text-blue-500 transition" />
    </button>
  </div>
  
      <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reelToShow.map((reel) => (
          <div
            key={reel._id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <video
              src={`${reel.video}?tr=w-400,h-250,cm-extract:frame-1000`}
              alt={reel.name}
              className="w-full h-48 object-cover rounded-lg shadow"
            />
            
          </div>
        ))}
      </div>
      
      




</div>
     
    
    
  )
}

export default UserInfoElement
