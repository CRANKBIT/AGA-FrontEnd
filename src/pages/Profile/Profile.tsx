import Container from '@/layouts/Container/Container'

export default function Profile() {
  return (
    <div className="container mx-auto p-4 relative">
    <span className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-red-500">
      <i className="fas fa-times"></i>
    </span>
    <div>
      <div className="text-xl">
          <div className="container mx-auto p-4">
              <h1 className="text-4xl font-bold  text-black">My Profile</h1>

              <div className="custom-spacing">
                  <label htmlFor="full-name" className="text-lg text-gray-700">Full Name</label> <br/>
                  <input id="full-name" type="text" className="border border-gray-300 rounded p-2 mt-1"/>
              </div>

              <div className="custom-spacing">
                  <label htmlFor="email" className="text-lg text-gray-700">Email</label> <br/>
                  <input id="email" type="email" className="border border-gray-300 rounded p-2 mt-1"/>
              </div>
            <div className=" container mx-auto p-4">
              <a href="#" className=" text-blue-500 hover:underline">Change Password</a>
            </div>

              <div className="flex mt-8">
                  <button className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded hover:bg-indigo-700">Update
                      Changes
                  </button>
              </div>
            <hr/>

              <div className="flex mt-4">
                  <button className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded hover:bg-red-700">Logout
                  </button>
              </div>
            <div className=" container mx-auto p-4">
              <a href="#" className="text-blue-500 hover:underline ">Request to Close Account</a>
            </div>
          </div>

      </div>

    </div>
    </div>
  )
}
