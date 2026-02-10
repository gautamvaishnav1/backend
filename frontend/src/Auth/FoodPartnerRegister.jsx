
import React, { useState } from 'react'
import { foodPartnerRegisterApi } from '../API/authAPI';
import { useNavigate } from 'react-router-dom';
import api from '../API/api';

export default function FoodPartnerRegister() {
  const [error, setError] = useState('')

   const navigate=useNavigate()
  const handleOnSubmit=async(e)=>{
   e.preventDefault() ;
   setError('')
    
   try {
     const fullName=e.target.fullName.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    const phoneNumber=e.target.phoneNumber.value;
    const address=e.target.address.value;
    const formData={fullName,email,password,phoneNumber,address};
    console.log(formData)
      const response= await api.post(foodPartnerRegisterApi,formData,{withCredentials:true})
      console.log(response.data)
      const role=response.data.user.role;
      localStorage.setItem('role',role)
      navigate('/')
    
   } catch (err) {
    console.log(err)
    setError(err?.response?.data?.errors||err?.response?.data?.message)
   }
  }
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-center text-2xl font-semibold mb-6">Food Partner Registration</h2>

      <form className="space-y-6" noValidate onSubmit={handleOnSubmit}>
          {error && (
          <p className="text-red-600 text-sm text-center">{error}</p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Business Name</label>
            <input
              type="text"
              name='fullName'
              placeholder="Your restaurant or business name"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
            name='email'
              type="email"
              placeholder="contact@business.com"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name='phoneNumber'
              placeholder="(123) 456-7890"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Business Address</label>
          <input
            type="text"
            name='address'
            placeholder="Street address, city, state"
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name='password'
              placeholder="Create a password"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          
        </div>

      

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              aria-label="terms"
              type="checkbox"
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label className="font-medium text-gray-700">Agree to terms</label>
            <p className="text-gray-500">I agree to the platform's terms and service.</p>
          </div>
        </div>

        <div>
          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-md">
            Create account
          </button>
        </div>
      </form>
    </div>
  )
}