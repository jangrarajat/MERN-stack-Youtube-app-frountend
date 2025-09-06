import React, { useState } from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import ButtonLoading from '../components/ButtonLoading';
import axios from 'axios';
import Swal from "sweetalert2";


function Registration() {
  const navigate = useNavigate()
  const [preview, setPreview] = useState(null);
  const [previewCover, setPreviewCover] = useState(null);
  const [signupForm, setSignupForm] = useState(false)
  const [signupLoading, setSignupLoading] = useState(false)
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [formData, setFormData] = useState({});

  function previewHandel(e) {

    setPreview(URL.createObjectURL(e.target.files[0]))
    setAvatar(e.target.files[0]);

    e.target.value = ""
  }

  function previewCoverHandel(e) {
    setPreviewCover(URL.createObjectURL(e.target.files[0]))
    setCoverImage(e.target.files[0])
    e.target.value = ""
  }

  function inputHandel(e) {
    e.preventDefault()
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));


  }



  const registration = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append("fullname", formData.fullname);
    data.append("username", formData.username);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("avatar", avatar);
    data.append("coverImage", coverImage);

    if (!data) return true

    try {
      setSignupForm(false)
      setSignupLoading(true)
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/users/register`, data)
      console.log("Server response:", res.data.message);
      setSignupLoading(false)
      Swal.fire("Success!", res.data.message, "success");
      navigate('/login')
    } catch (error) {
      console.log(error.response.data.message)
      Swal.fire("Error!", error.response.data.message, "error");
      throw error
    } finally {
      setSignupLoading(false)
    }


  }








  return (
    <>

      <div className='h-full w-full text-white dark:bg-gray-950 bg-gray-950 flex flex-col  justify-center items-center  '>
        <div className='  w-full flex justify-center mt-11'>
        </div>
        <div className='w-60'>
          <img src="https://i.postimg.cc/SQ1y3SMR/generated-image-1.png" alt="logo" />
        </div>
        <h1 className='text-white  md:text-5xl text-4xl mb-4 '> Signup</h1>
        <h1 className='font-thin'>Sign in to YouTube</h1>

        <div className=' md:w-1/2 w-full  text-white p-4  mt-10 '>
          {signupForm ? (<>
            <form className=' flex flex-col  ' onSubmit={registration}>



              <div className=' relative'>

                {preview ? (<>
                  <div className=' absolute right-1/2 translate-x-1/2  bottom-44'>
                    <div className='w-24 h-24 rounded-full bg-pink-500 border-4 border-white overflow-hidden'>
                      <img src={preview} alt="avatar" className='w-full h-full object-cover' />
                    </div>
                  </div>
                </>) : (<>
                  <label htmlFor="avatar" className='w-24 h-24 border-2  absolute 
                                  font-thin  mb-3 p-7 rounded-full right-1/2 translate-x-1/2  bottom-44 bg-gray-950
                                   flex  justify-center items-center
                                 border-white border-dashed' >
                    <span className='flex flex-col gap-3 justify-center items-center' >
                      avatar <FaCloudUploadAlt />
                    </span>
                  </label></>)}


                {previewCover ? (<>
                  <div className='h-60 w-full overflow-hidden border rounded-md'>
                    <img src={previewCover} alt="coverimage" className='h-full w-full object-cover' />
                  </div>
                </>) : (<>
                  <label htmlFor="coverImage"
                    className='w-full h-60 border-2 rounded-md   font-thin mb-3  gap-20   overflow-hidden flex justify-center items-center  border-white border-dashed'
                  >
                    <p className='m-11'>
                      <span className='flex flex-row gap-3 justify-center items-center      ' >
                        Cover <FaCloudUploadAlt />
                      </span>
                    </p>

                  </label>
                </>)}


              </div>


              <input type="file"
                onChange={previewHandel}
                id='avatar'
                name='avatar'
                placeholder='select fullname ...'
                accept="image/*"
                className='w-full  hidden' />


              <input type="file"

                onChange={previewCoverHandel}

                id='coverImage'
                name='coverImage'
                placeholder='select coverImage...'
                accept="image/*"
                className=' hidden '
              />

              <div className='h-10 w-full mt-5 gap-3 flex justify-evenly items-center rounded-md  '>
                {preview ? (<>  <label htmlFor="avatar" className='w-full  h-full border rounded-md bg-gray-950 flex justify-center items-center font-thin'>Change avatar</label></>) :
                  (<></>)}
                {previewCover ? (<>  <label htmlFor="coverImage" className='w-full  h-full border rounded-md bg-gray-950 flex justify-center items-center font-thin'>Change cover</label></>) :
                  (<></>)}
              </div>

              <label htmlFor="fullname"
                className='font-thin mt-5'
              >FullName</label>

              <input type="text"
                onChange={inputHandel}
                required
                name='fullname'
                placeholder='enter fullname '
                className='pl-3 mb-5 bg-gray-950 rounded p-2 border  border-white'
              />

              <label htmlFor="username"
                className='font-thin  '
              >UserName</label>

              <input type="text"
                onChange={inputHandel}
                required
                className='mb-5 bg-gray-950 rounded p-2 border  border-white'
                name='username'
                placeholder='enter username '
              />



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


              <button className='bg-red-700 flex justify-center items-center gap-2 mt-5 h-12 rounded-md font-extralight text-2xl p-1 mb-32  '   >

                Signup

              </button>
            </form>

          </>) : (<>
            <div className='w-full flex justify-center mt-10'>
              <button className='flex justify-center items-center w-60 bg-red-700 p-4 rounded-md font-thin text-2xl' onClick={() => setSignupForm(true)}>
                {signupLoading ? (<><ButtonLoading /></>) : "Signup"}
              </button>
            </div>
          </>)}




          <p className='text-center mt-5'>
            <span className=' font-thin text-gray-200 mr-3'>
              Already have an account?
            </span>
            <Link to="/login" >
              <span className=' font-thin text-blue-500 hover:underline'>
                Login here
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Registration
