import { LogOut, TvMinimal } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
function UserDeitles() {
    const [user, setUser] = useState(null)
    const [avatar, setAvatar] = useState("https://i.pinimg.com/736x/e8/7a/b0/e87ab0a15b2b65662020e614f7e05ef1.jpg")
    const [userDietalsDiv, setUserDietalsDiv] = useState(false)
    const [fullName, setFullName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [userDiv, setserDiv] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        setUser(user)
        setAvatar(user.avatar)
        setFullName(user.fullname)
        setUserName(user.username)
        setEmail(user.email)
    }, [])

    function logout() {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        navigate('/login')
    }

    return (
        <div className=' fixed z-50 right-4 top-2'>
            <div className=' hidden md:flex w-10 h-10 rounded-full bg-pink-500  overflow-hidden' onClick={() => setserDiv(prev => !prev)}>
                <img src={avatar} alt="avatar" className='w-full h-full object-cover' />
            </div>
            {
                userDiv ? (
                    <div className='min-h-[300px] w-[240px] bg-gray-900  absolute top-14 right-5 rounded-lg'>

                        <div className='flex flex-col items-center mt-4 '>
                            <div className=' hidden md:flex w-20 h-20 rounded-full bg-pink-500  overflow-hidden' >
                                <img src={avatar} alt="avatar" className='w-full h-full object-cover' />
                            </div>
                            <div >
                                <span className='flex  gap-5'>
                                    <h3 className='text-lg'>{fullName}</h3>
                                    <h3 className='text-gray-300 text-sm'>@{userName}</h3>

                                </span>
                                <h3 className='text-gray-300 text-sm'>{email}</h3>
                            </div>
                        </div>

                        <div className='w-[90%] h-[1px] bg-gray-400 my-3 m-auto'></div>

                        <div className='w-[90%] h-10 rounded-lg cursor-pointer hover:bg-gray-800 my-1 m-auto flex flex-row  text-sm font-thin  pl-4 items-center gap-5'>
                            <TvMinimal />  <span>View your channel</span>
                        </div>
                        <div className='w-[90%] h-10 rounded-lg cursor-pointer hover:bg-gray-800 my-1 m-auto flex flex-row  text-sm font-thin   pl-4 items-center gap-5' onClick={logout}>
                            <LogOut/>  <span>Sign out</span>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

export default UserDeitles
