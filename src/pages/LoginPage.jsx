import React from 'react'

const LoginPage = () => {
    const handleSubmit =() =>{

    }
  return (
    <section className="flex flex-col justify-center mt-20 max-w-[400px] m-auto">
      <div className="p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-semibold text-center">
          로그인
        </h1>
        <form className="mt-6" onSubmit={handleSubmit()}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-800"
            >Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-800"
            >Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
            />
          </div>

          <div className="mt-6"> 
            <button
              type="submit" className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 duration-200"
            >
              로그인
            </button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default LoginPage