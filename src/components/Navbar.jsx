import React, { useEffect, useState } from 'react'
import { Bell, CircleUser, CircleUserRound, Film, House, LogOut, Menu, Plus, Search, Settings, TvMinimalPlay } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PhoneNavbar from './PhoneNavbar';


function navbar() {
    const [user, setUser] = useState(null)
    const [avatar, setAvatar] = useState("https://i.pinimg.com/736x/e8/7a/b0/e87ab0a15b2b65662020e614f7e05ef1.jpg")
    const [userDietalsDiv, setUserDietalsDiv] = useState(false)
    const [fullName, setFullName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")


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
            <div className='h-20  z-50 flex justify-between text-white items-center  px-2 md:px-10 fixed w-full'>
                <div className='h-fit w-fit flex flex-row justify-center items-center md:gap-5'>
                    <div className=' hidden md:flex hover:bg-gray-700 p-2 rounded-full'>
                        <Menu className=' cursor-pointer' />
                    </div>
                    <div className='w-40 h-40'>
                        <img className='h-full w-full' src="https://i.postimg.cc/SQ1y3SMR/generated-image-1.png" alt="logo" />
                    </div>

                </div>

                <div className=' w-[40%]'>
                    <div className=' hidden  md:flex flex-row items-center border-[1px] border-gray-600 rounded-full w-full h-10 justify-evenly'>
                        <input type="text" placeholder='Search' className='bg-transparent h-full pl-5 w-[90%]' />
                        <Search strokeWidth={1} className=' bg-gray-600 h-full p-1 w-[10%] rounded-full rounded-tl-none rounded-bl-none' />
                    </div>


                </div>
                <div className='flex gap-4 items-center '>
                    <Search strokeWidth={1} className=' md:hidden ' />
                    <div className=' cursor-pointer  hidden md:flex flex-row bg-gray-800 rounded-full md:px-7 md:py-3 p-2 items-center'>    <Plus />Create</div>
                    <div className=' hover:bg-gray-700 p-2 rounded-full cursor-pointer'><Bell /></div>
                    <div className=' hidden md:flex w-10 h-10 rounded-full bg-pink-500  overflow-hidden' onClick={() => setUserDietalsDiv(prev => !prev)}>
                        <img src={avatar} alt="avatar" className='w-full h-full object-cover' />
                    </div>

                    {userDietalsDiv ?
                        (<>
                            <div className='  hidden md:flex flex-col absolute top-20 right-5 rounded-md min-h-96 w-80 bg-gray-900'>

                                <div className='w-full h-32 flex'>
                                    <div className='h-full w-[30%]  flex justify-center items-center'>
                                        <div className='w-20 h-20 rounded-full bg-pink-500  overflow-hidden' onClick={() => setUserDietalsDiv(prev => !prev)}>
                                            <img src={avatar} alt="avatar" className='w-full h-full object-cover' />
                                        </div>
                                    </div>
                                    <div className='h-full w-[70%] flex flex-col justify-center items-start'>
                                        <h1 className='font-thin text-2xl'>{fullName}</h1>
                                        <p className='font-thin'>{userName}</p>
                                        <p className='font-thin'>{email}</p>
                                    </div>

                                </div>
                                <div className="h-[1px] bg-gray-200"></div>
                                <div className="py-2">
                                    {/* View your channel */}
                                    <div className="sidebar-item flex items-center gap-3 px-4 py-3 cursor-pointer">
                                        <TvMinimalPlay />
                                        <span className="text-sm text-gray-200">View your channel</span>
                                    </div>

                                    {/* Google Account section */}
                                    <div className="divider"></div>

                                    <div className="sidebar-item flex gap-3 items-center px-4 py-3 cursor-pointer">
                                        <CircleUser />
                                        <span className="text-sm text-gray-200">Switch account</span>
                                    </div>

                                    <div className="sidebar-item flex items-center gap-3 px-4 py-3 cursor-pointer">
                                        <Settings />
                                        <span className="text-sm text-gray-200">Settings</span>
                                    </div>

                                    <div onClick={logout} className="sidebar-item flex items-center gap-3 px-4 py-3 cursor-pointer">
                                        <LogOut />
                                        <span className="text-sm text-gray-200">Sign out</span>
                                    </div>

                                </div>


                            </div>
                        </>) :
                        (<>
                        </>)}




                </div>
            </div>


            {/* phone bottom bar  */}
            <PhoneNavbar/>

        </>
    )
}

export default navbar



