import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ButtonLoading from '../components/ButtonLoading';
import axios from 'axios';
import Swal from 'sweetalert2';
function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({});
  const [loginLoading, setLoginLoading] = useState(); false

  function inputHandel(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const login = async (e) => {
    e.preventDefault()
   
    try {
      setLoginLoading(true)
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/users/login`, {
        email: formData.email,
        password: formData.password
      })
      console.log(res.data)
     
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setLoginLoading(false)
      navigate('/home')
    } catch (error) {
       Swal.fire("Error", error.response.data.message, "error")
      throw error
    } finally {
      setLoginLoading(false)
    }

  }



  return (
    <div className='h-full w-full text-white bg-gray-950  flex flex-col  justify-center items-center  '>
      <div className='w-full  flex justify-center '>
        <div className='w-60'>
          <img src="https://i.postimg.cc/SQ1y3SMR/generated-image-1.png" alt="logo" />
        </div>
      </div>
      <h1 className='text-white  md:text-5xl text-4xl mb-4 '> Login</h1>
      <h1 className='font-thin'>Continue to your account</h1>


      <div className=' md:w-1/2 w-full  text-white p-4   '>

        <form className='flex flex-col' onSubmit={login}>





          <label htmlFor="email"
            className='font-thin'
          >Email</label>
          <input type="email"
            onChange={inputHandel}
            required
            name='email'
            placeholder='Enter email '
            className='pl-3 mb-5 bg-gray-950 rounded p-2 border  border-white'
          />




          <label htmlFor="password"
            className='font-thin'
          >Password</label>
          <input type="password"
            onChange={inputHandel}
            required
            name='password'
            placeholder='enter password '
            className='pl-3 mb-5 bg-gray-950 rounded p-2 border  border-white'
          />
          <p>
            <span className=' font-thin text-gray-300 mr-3'>
              Don't have an account?
            </span>
            <Link to="/signup" >
              <span className=' font-thin text-blue-500 hover:underline'>
                Signup
              </span>
            </Link>
          </p>

          <button className='flex  justify-center bg-red-700 mt-5 h-12 rounded-md font-extralight text-2xl p-1 mb-32  ' >
            {loginLoading ? (<><ButtonLoading /></>) : (<>Login</>)}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
