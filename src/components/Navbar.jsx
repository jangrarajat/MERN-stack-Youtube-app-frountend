import React, { useEffect, useState } from 'react'
import { Bell, CircleUser, CircleUserRound, Film, House, LogOut, Menu, Plus, Search, Settings, TvMinimalPlay } from 'lucide-react';
import { useNavigate,Link } from 'react-router-dom';
import PhoneNavbar from './PhoneNavbar';
import Dashbord from '../pages/Dashbord';
import UploadVideo from './UploadVideo';
import UserDeitles from './UserDeitles';



function navbar() {
    const [user, setUser] = useState(null)
    const [avatar, setAvatar] = useState("https://i.pinimg.com/736x/e8/7a/b0/e87ab0a15b2b65662020e614f7e05ef1.jpg")
    const [userDietalsDiv, setUserDietalsDiv] = useState(false)
    const [fullName, setFullName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [uploadVideoDiv,setUploadVideoDiv] = useState(false)


    useEffect(() => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        setUser(user)
        setAvatar(user.avatar)
        setFullName(user.fullname)
        setUserName(user.username)
        setEmail(user.email)
    }, [])

    const navigate = useNavigate()

    function logout() {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        navigate('/login')
    }

    return (
        <>
      
            <div className=' h-14   flex justify-between text-white items-center  px-2 md:px-10 fixed w-full'>
                <Link to='/dashbord'>
                    <div className='md:ml-10 h-fit w-fit flex flex-row justify-center items-center md:gap-5'>


                        <div className='w-40 h-40'>
                            <img className='h-full w-full' src="https://i.postimg.cc/SQ1y3SMR/generated-image-1.png" alt="logo" />
                        </div>


                    </div>
                </Link>

                <div className=' w-[40%]'>
                    <div className=' hidden  md:flex flex-row items-center border-[1px] border-gray-600 rounded-full w-full h-10 justify-evenly'>
                        <input type="text" placeholder='Search' className='bg-transparent h-full pl-5 w-[90%]' />
                        <Search strokeWidth={1} className=' bg-gray-600 h-full p-1 w-[10%] rounded-full rounded-tl-none rounded-bl-none' />
                    </div>


                </div>
                <div className='flex gap-4 items-center '>
                    <Search strokeWidth={1} className=' md:hidden ' />
                    <div className=' cursor-pointer  hidden md:flex flex-row bg-gray-800 rounded-full md:px-7 md:py-2 p-2 items-center' onClick={()=>setUploadVideoDiv(pre=>!pre)}>    <Plus />Create</div>
                    <div className=' hover:bg-gray-700 p-2 rounded-full cursor-pointer mr-6'><Bell /></div>
                  

                </div>
            </div>


            {/* phone bottom bar  */}
            <PhoneNavbar setUploadVideoDiv={setUploadVideoDiv}/>
            <UserDeitles/>
             {uploadVideoDiv ? (<UploadVideo uploadVideoDiv={uploadVideoDiv} setUploadVideoDiv={setUploadVideoDiv}/>):null}
        </>
    )
}

export default navbar



