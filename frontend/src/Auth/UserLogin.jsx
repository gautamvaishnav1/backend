import React, { useState } from "react"
import api from "../API/api"
import { userLoginApi } from "../API/authAPI"
import axios from "axios"
import { useNavigate } from "react-router-dom"

 export default function UserLogin() {
  const [error, setError] = useState('')

  const handleOnSubmit=async(e)=>{
    const navigate=useNavigate()
    setError('')
    e.preventDefault()
    try {
      
    const email=e.target.email.value;
    const password=e.target.password.value;
    const formData={email,password}
    const response=await api.post(userLoginApi,formData,{withCredentials:true})
    console.log(response.data)
      navigate('/')
    } catch (err) {
      console.log(err)
      setError(err?.response?.data?.errors||err?.response?.data?.message)
    }
  }
  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-center text-2xl font-semibold mb-6">User Login</h2>

      <form noValidate onSubmit={handleOnSubmit} className="space-y-4">
        <div>
            {error && (
          <p className="text-red-600 text-sm text-center">{error}</p>
        )}
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-2"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md"
          >
            Sign in
          </button>
        </div>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Don't have an account? Register from the app's register screen.
      </p>
    </div>
  )
}
