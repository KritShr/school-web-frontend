import React, {useState} from 'react'
import styles from "../css/page/Contact.module.css";
import { toast } from 'react-toastify';
import axiosInstance from "../utils/axios";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [admin, setAdmin] = useState({
    username:'',
    password:'',
  })
  const navigate = useNavigate();

  const handleChange= (event)=>{
    const{name, value} = event.target;
    setAdmin(prevState=>({
      ...prevState, // 바꾸지 않는 값은 유지
      [name]: value // 바꾸는 값을 오버라이드
    }));
  }

  const handleSubmit = async(event) =>{
    event.preventDefault();
    console.log(admin)

    const body = {
      ...admin
    }

    try {
      const response = await axiosInstance.post('/admin/login', body);

      // Assuming the token is in response.data.token
      const token = response.data.token;

      // Save the token to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('isAuth', true);
      navigate('/')

      toast.info('Login successful!');
    } catch (err) {
      console.error(err);
      toast.error('Login failed.');
    }
  }
  return (
    <section className="flex flex-col mt-10 my-10 justify-center mt-0 max-w-[400px] m-auto">
      <div className={styles.contact4} ></div>
      <div className="p-10 m-10 bg-white rounded-xl shadow-2xl">
        <h1 className="text-3xl font-semibold text-center">
          Admin Login
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="username"
              className="text-sm font-semibold text-gray-800"
            >Username</label>
            <input
              onChange={handleChange}
              type="text"
              id="username"
              name='username'
              value={admin.username}
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-800"
            >Password</label>
            <input
              onChange={handleChange}
              type="password"
              id="password"
              name='password'
              value={admin.password}
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
            />
          </div>

          <div className="mt-6"> 
            <button
              type="submit" className="w-full -bg--color text-white px-4 py-2 rounded-md hover:-bg--medium duration-200 text-base"
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