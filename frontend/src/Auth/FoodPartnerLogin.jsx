import React from 'react'

export default function FoodPartnerLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">Food Partner Sign in</h2>

        <form className="space-y-5" noValidate>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="partner@business.com"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
   

            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-700">Forgot password?</a>
            </div>
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

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account? <a href="/foodPartner/register" className="text-blue-600 font-medium">Register as Food Partner</a>
        </p>
      </div>
    </div>
  )
}