import React from 'react'
import api from '../API/api'

const UserRegister = () => {
  const handleSubmit = (e) => {
    e.preventDefault() 
    const formData = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      password: e.target.password.value }
      api.post(`/api/auth/user/register`, formData)
      .then(res => {
        console.log('Registration successful:', res.data)
      })
      .catch(err => {
        console.error('Registration failed:', err)
      })  
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900">Create an account</h2>
          <p className="text-sm text-gray-500 mt-1 mb-4">Get started — it only takes a few clicks.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
              <input
                name="fullName"
                type="text"
                
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                name="email"
                type="email"
               
               
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                name="password"
                type="password"
                
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Create a password"
              />
            </div>

            <div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md">Create account</button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">Already have an account? <a href="/user/login" className="text-blue-600 hover:underline">Sign in</a></p>
        </div>
      </div>
    </div>
  )
}

export default UserRegister

