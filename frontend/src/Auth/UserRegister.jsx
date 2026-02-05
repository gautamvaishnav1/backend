import React, { useState } from 'react'

const UserRegister = () => {
  const [form, setForm] = useState({ fullName: '', email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    const { fullName, email, password } = form
    if (!fullName || !email || !password) {
      setError('Please fill all fields')
      return
    }
    // TODO: replace with real API call
    console.log('Registering user', form)
    alert('Registered: ' + email)
    setForm({ fullName: '', email: '', password: '' })
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">User Registration</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Jane Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="••••••••"
          />
        </div>

        <div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default UserRegister
