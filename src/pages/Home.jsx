import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'

function Home() {
    const navigate = useNavigate()

    function logout() {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        navigate('/login')
    }


    return (
        <>
            <Navbar />
            <div className=' relative top-60 h-full w-full flex  justify-center'>
                <button onClick={logout} className='text-white bg-gray-700 p-2 px-5 rounded-md'>
                    Logout
                </button>
            </div>
        </>
    )
}

export default Home
