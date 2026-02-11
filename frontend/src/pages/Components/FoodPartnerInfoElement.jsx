import React, { useEffect, useState } from 'react'
import api from '../../API/api'
import { foodPartnerInfo } from '../../API/getInfo'

const FoodPartnerInfoElement = () => {


const [foodPartner, setFoodPartner] = useState(null)
useEffect(() => {
  const getInfo=async()=>{
    try{
            
    const res=await api.get(foodPartnerInfo,{withCredentials:true})
    setFoodPartner(res)
    }
    catch(err){
        console.log(err)
    }
  }
getInfo()
 
})


  return (
    <div>FoodPartnerInfoElement</div>
  )
}

export default FoodPartnerInfoElement