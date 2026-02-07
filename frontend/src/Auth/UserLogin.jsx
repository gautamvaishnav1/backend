import api from "../API/api"

 export default function UserLogin() {
  const handleOnSubmit=async(e)=>{
    e.preventDefault()
    api.post('/auth/login',{
      email:e.target.email.value,
      password:e.target.password.value
    }).then(res=>{
      console.log(res.data)
    }).catch(err=>{
      console.log(err)
    })
    console.log(e.target.email.value,e.target.password.value)
  }
  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-center text-2xl font-semibold mb-6">User Login</h2>

      <form noValidate onSubmit={handleOnSubmit} className="space-y-4">
        <div>
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
