
import { Dot, EllipsisVertical, Film, House, TvMinimalPlay } from 'lucide-react'
import React, { use, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SideBar() {

  const [avatar, setAvatar] = useState(" ")
  const navigate = useNavigate()


  useEffect(() => {
    let user = localStorage.getItem("user")
    user = JSON.parse(user)
    setAvatar(user.avatar)

  }, [])

  return (
    <>
      <div className=' hidden  fixed w-[5%] md:flex flex-col  items-center pt-5 gap-5 h-full '>
        <div className='h-16 w-16 rounded-lg hover:bg-gray-800 flex justify-center items-center'>
          <Link to='/home' className='flex flex-col items-center '>    <House />
            <span className='text-[9px]'>Home</span>
          </Link>
        </div>
        <div className='h-16 w-16 rounded-lg hover:bg-gray-800 flex flex-col items-center justify-center'>
          <div className='flex flex-col justify-center items-center'>
            <Link className='flex flex-col items-center '>
              <Film />
              <span className='text-[9px]'>Shorts</span>
            </Link>
          </div>
        </div>
        <div className='h-16 w-16 rounded-lg hover:bg-gray-800 flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
            <Link className='flex flex-col items-center '>
              <TvMinimalPlay />
              <span className='text-[9px]'>Subscripations</span>
            </Link>
          </div>
        </div>
        <div className='h-16 w-16 rounded-lg hover:bg-gray-800 flex justify-center items-center'>
          <Link to='/user' className=' flex flex-col
                         items-center'>
            <div className='w-8 h-8  rounded-full bg-pink-500  overflow-hidden'  >
              <img src={avatar} alt="avatar" className='w-full h-full object-cover' />

            </div>
            <span className='text-[9px]'>You</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SideBar
