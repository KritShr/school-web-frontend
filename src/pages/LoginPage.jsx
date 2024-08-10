import React from 'react'
import styles from "../css/page/Contact.module.css";

const LoginPage = () => {
    const handleSubmit =() =>{

    }
  return (
    <section className="flex flex-col mt-10 my-10 justify-center mt-0 max-w-[400px] m-auto">
      <div className={styles.contact4} ></div>
      <div className="p-10 m-10 bg-white rounded-xl shadow-2xl">
        <h1 className="text-3xl font-semibold text-center">
          Admin Login
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
              type="submit" className="w-full bg-black text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base"
            >
              Login
            </button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default LoginPage