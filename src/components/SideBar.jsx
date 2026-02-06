
import { Dot, Menu, EllipsisVertical, Film, House, TvMinimalPlay, ChevronRight, History, ListVideo, Youtube, Clock4, ThumbsUp, GraduationCap, Video, Settings, Flag, MessageSquareWarning, CircleUser } from 'lucide-react'
import React, { use, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SideBar() {
  const [menu, setMenu] = useState(false)
  const [avatar, setAvatar] = useState(" ")
  const navigate = useNavigate()


  useEffect(() => {
    let user = localStorage.getItem("user")
    user = JSON.parse(user)
    setAvatar(user.avatar)

  }, [])

  return (
    <>
      <div className={` myDiv top-0  bg-[#0f0f0f] z-50 hidden  fixed ${menu ? "w-[20%]" : "w-[5%]"} md:flex flex-col  items-center pt-2 gap-5 h-full `}>
        {menu ?
          (<>
            <div className=' flex flex-row items-center justify-evenly h-16 w-full '>
              <div onClick={() => setMenu(!menu)} className=' hover:bg-gray-700 cursor-pointer hidden md:flex  p-2 rounded-full'>
                <Menu className=' cursor-pointer' />
              </div>

              <div className=' w-40 h-36'>
            
                <img className='h-full w-full' src="https://i.postimg.cc/SQ1y3SMR/generated-image-1.png" alt="logo" />
           
            </div>

          </div>
        <div className='h-fit w-full  '>
          <div className='  flex flex-row gap-9 pl-5 items-center h-10 w-full  hover:bg-gray-800'>
            <House /> <span>Home</span>
          </div>
          <div className=' flex flex-row gap-9 pl-5 items-center h-10 w-full  hover:bg-gray-800'>
            <Film />    <span>Shorts</span>
          </div>
          <div className=' flex flex-row gap-9 pl-5 items-center h-10 w-full  hover:bg-gray-800'>
            <TvMinimalPlay /> <span >Subscripations</span>
          </div>
        </div>
        <div className='w-full h-[1px] bg-gray-400'></div>
        <div className='h-fit w-full'>
          <Link to='/user'>
            <div className=' flex flex-row gap-1 pl-5 items-center h-10 w-full hover:bg-gray-800  '>
              <span className='text-gray-300 '>You</span> <ChevronRight size={18} />
            </div>
          </Link>
          <div className=' flex flex-row gap-9 pl-5 items-center h-10 w-full  hover:bg-gray-800'>
            <History /> <span>History</span>
          </div>
          <div className=' flex flex-row gap-9 pl-5 items-center h-10 w-full  hover:bg-gray-800'>
            <ListVideo /><span>Playlists</span>
          </div>
          <div className=' flex flex-row gap-9 pl-5 items-center h-10 w-full  hover:bg-gray-800'>
            <Video /> <span>Your videos</span>
          </div>
          <div className=' flex flex-row gap-9 pl-5 items-center h-10 w-full  hover:bg-gray-800'>
            <GraduationCap /><span>Your courses</span>
          </div>
          <div className=' flex flex-row gap-9 pl-5 items-center h-10 w-full  hover:bg-gray-800'>
            <Clock4 /><span>Watch later</span>
          </div>
          <div className=' flex flex-row gap-9 pl-5 items-center h-10 w-full  hover:bg-gray-800'>
            <ThumbsUp /> <span>Liked videos</span>
          </div>
        </div>
        <div className='w-full h-[1px] bg-gray-400'></div>
        <div className='h-fit w-full  '>
          <div className='  flex flex-row gap-9 pl-5 items-center h-10 w-full  hover:bg-gray-800'>
            <Settings /> <span>Settings</span>
          </div>
          <div className=' flex flex-row gap-9 pl-5 items-center h-10 w-full  hover:bg-gray-800'>
            <Flag />    <span>Report history</span>
          </div>
          <div className=' flex flex-row gap-9 pl-5 items-center h-10 w-full  hover:bg-gray-800'>
            <MessageSquareWarning /> <span >Send feedback</span>
          </div>
        </div>

      </>)
      : (<>
        <div onClick={() => setMenu(!menu)} className=' hover:bg-gray-700 cursor-pointer hidden md:flex  p-2 rounded-full'>
          <Menu className=' cursor-pointer' />
        </div>
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
           <CircleUser/>
            <span className='text-[9px]'>You</span>
          </Link>
        </div>
      </>)}
    </div >
    </>
  )
}

export default SideBar
