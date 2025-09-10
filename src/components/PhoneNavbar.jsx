import React, { useState, useEffect } from 'react'
import { Bell, CircleUser, CircleUserRound, Film, House, LogOut, Menu, Plus, Search, Settings, TvMinimalPlay } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function PhoneNavbar() {
    const [avatar, setAvatar] = useState(" ")
    const navigate = useNavigate()


    useEffect(() => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        setAvatar(user.avatar)

    }, [])




    return (
        <>


            <div className=' fixed z-50 bg-gray-950  flex items-center justify-evenly bottom-0 w-full h-12  md:hidden'>
                <div className='flex flex-col justify-center items-center'>
                    <Link to='/home'>    <House /></Link>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Film />
                </div>

                <div className='bg-gray-600 p-2 rounded-full'>
                    <Plus />

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <TvMinimalPlay />
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <Link to='/user'>
                        <div className='w-7 h-7  rounded-full bg-pink-500  overflow-hidden'  >
                            <img src={avatar} alt="avatar" className='w-full h-full object-cover' />

                        </div>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default PhoneNavbar
