import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { ChevronRight, CircleUserRound, Dot, Pencil, EllipsisVertical, Plus, Video, MoveDown, ArrowDownToLine, MessageCircleQuestionMark } from 'lucide-react'
import SideBar from '../components/SideBar'

function User() {
    const [videos, setVideos] = useState([])
    const [avatar, setAvatar] = useState("http://res.cloudinary.com/drrj8rl9n/image/upload/v1757416315/dq169rjde1btrjrlyqtr.jpg   ")
    const [fullName, setFullName] = useState("fullName")
    const [userName, setUserName] = useState("username")
    //  const [username , setFullName] = useState("fullName") 


    useEffect(() => {
        const user = localStorage.getItem("user")
        const userData = JSON.parse(user)
        setAvatar(userData.avatar)
        setFullName(userData.fullname)
        setUserName(userData.username)
        console.log(userData)
    }, [])


    useEffect(() => {
        setVideos(() => (
            videoData.map((video) => (
                <div className='h-fit w-full  pb-2 ' key={video.id}>
                    <div className='h-40  md:h-60 w-72  md:w-96   '>
                        <img className='w-full h-full rounded-lg md:rounded-lg' src={video.thumbnailUrl} alt="" />
                    </div>
                    <div className='w-full h-fit min-h-20  flex  rounded-lg'>
                        <div className=' h-full w-[10%] flex justify-center items-center  pt-5 md:pt-2'>
                            <div className=' w-8 h-8 md:w-10 md:h-10 rounded-full   overflow-hidden' >
                                <img src={video.avatar} alt="avatar" className='w-full h-full object-cover' />
                            </div>
                        </div>
                        <div className='w-[82%] h-full '>
                            <div className='w-full h-[60%] max-h-12     overflow-hidden'>
                                <h2 className=''>{video.title}</h2>
                            </div>
                            <div className='w-full h-[40%] text-gray-400 flex flex-row  gap-1 md:flex-col'>
                                <p className='text-sm'>{video.channelName}</p>
                                <p className='flex  text-sm'><span>{video.view}</span> <Dot /><span>{video.publishedTime}</span></p>

                            </div>

                        </div>
                        <div className='w-[8%] h-full mt-5 flex justify-center'>
                            <div className=' hidden md:flex hover:bg-gray-700  h-full p-1 rounded-full'>
                                <EllipsisVertical className=' cursor-pointer' />
                            </div>

                        </div>
                    </div>
                </div>
            ))
        ))


    }, [])

    const videoData = [
        { id: 1, avatar: "http://res.cloudinary.com/drrj8rl9n/image/upload/v1757074377/yyezhbrwmrjorxiddvs5.png", title: "1Lorem ipsum, dolor sit amet consectetur adipisicing elit.", videoUrl: "", thumbnailUrl: "https://images.pexels.com/photos/33315262/pexels-photo-33315262.jpeg", channelName: "Sony live", view: "2.1m", publishedTime: "21 year ago", descraption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, dignissimos doloremque. Optio praesentium, suscipit culpa unde libero dolores porro, ex dolore doloremquraesentium, suscipit culpa unde libero dolores porro, ex dolore doloremquraesentium, suscipit culpa unde libero dolores porro, ex dolore doloremque exercitationem id, nisi pariatur eos. Tempora, maiores omnis!" },
        { id: 2, avatar: "http://res.cloudinary.com/drrj8rl9n/image/upload/v1757074377/yyezhbrwmrjorxiddvs5.png", title: "2Lorem ipsum, dolor sit amet consectetur adipisicing elit.", videoUrl: "", thumbnailUrl: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg", channelName: "Sub tv", view: "5.1m", publishedTime: "12 year ago", descraption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, dignissimos doloremque. Optio praesentium, suscipit culpa unde libero dolores porro, ex dolore doloremque exercitationem id, nisi pariatur eos. Tempora, maiores omnis!" },
        { id: 3, avatar: "http://res.cloudinary.com/drrj8rl9n/image/upload/v1757074377/yyezhbrwmrjorxiddvs5.png", title: "3Lorem ipsum, dolor sit amet consectetur adipisicing elit.", videoUrl: "", thumbnailUrl: "https://images.pexels.com/photos/1500610/pexels-photo-1500610.jpeg", channelName: "Indian hacker", view: "2.1m", publishedTime: "10 year ago", descraption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, dignissimos doloremque. Optio praesentium, suscipit culpa unde libero dolores porro, ex dolore doloremque exercitationem id, nisi pariatur eos. Tempora, maiores omnis!" },
        { id: 4, avatar: "http://res.cloudinary.com/drrj8rl9n/image/upload/v1757074377/yyezhbrwmrjorxiddvs5.png", title: "4Lorem ipsum, dolor sit amet consectetur adipisicing elit.", videoUrl: "", thumbnailUrl: "https://images.pexels.com/photos/20142092/pexels-photo-20142092.jpeg", channelName: "Codding school", view: "3.1L", publishedTime: "9 year ago", descraption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, dignissimos doloremque. Optio praesentium, suscipit culpa unde libero dolores porro, ex dolore doloremque exercitationem id, nisi pariatur eos. Tempora, maiores omnis!" },
        { id: 5, avatar: "http://res.cloudinary.com/drrj8rl9n/image/upload/v1757074377/yyezhbrwmrjorxiddvs5.png", title: "5Lorem ipsum, dolor sit amet consectetur adipisicing elit.", videoUrl: "", thumbnailUrl: "https://images.pexels.com/photos/2993940/pexels-photo-2993940.jpeg", channelName: "chai or code", view: "2.1k", publishedTime: "7 year ago", descraption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, dignissimos doloremque. Optio praesentium, suscipit culpa unde libero dolores porro, ex dolore doloremque exercitationem id, nisi pariatur eos. Tempora, maiores omnis!" },
        { id: 6, avatar: "http://res.cloudinary.com/drrj8rl9n/image/upload/v1757074377/yyezhbrwmrjorxiddvs5.png", title: "6Lorem ipsum, dolor sit amet consectetur adipisicing elit.", videoUrl: "", thumbnailUrl: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg", channelName: "web dev", view: "2k", publishedTime: "2 days ago", descraption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, dignissimos doloremque. Optio praesentium, suscipit culpa unde libero dolores porro, ex dolore doloremque exercitationem id, nisi pariatur eos. Tempora, maiores omnis!" },
        { id: 7, avatar: "http://res.cloudinary.com/drrj8rl9n/image/upload/v1757074377/yyezhbrwmrjorxiddvs5.png", title: "7Lorem ipsum, dolor sit amet consectetur adipisicing elit.", videoUrl: "", thumbnailUrl: "https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg", channelName: "softwire", view: "1M", publishedTime: "2 month ago", descraption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, dignissimos doloremque. Optio praesentium, suscipit culpa unde libero dolores porro, ex dolore doloremque exercitationem id, nisi pariatur eos. Tempora, maiores omnis!" },
        { id: 8, avatar: "http://res.cloudinary.com/drrj8rl9n/image/upload/v1757074377/yyezhbrwmrjorxiddvs5.png", title: "8Lorem ipsum, dolor sit amet consectetur adipisicing elit.", videoUrl: "", thumbnailUrl: "https://images.pexels.com/photos/5467333/pexels-photo-5467333.jpeg", channelName: "heacker", view: "2M", publishedTime: "3 year ago", descraption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, dignissimos doloremque. Optio praesentium, suscipit culpa unde libero dolores porro, ex dolore doloremque exercitationem id, nisi pariatur eos. Tempora, maiores omnis!" },
        { id: 9, avatar: "http://res.cloudinary.com/drrj8rl9n/image/upload/v1757074377/yyezhbrwmrjorxiddvs5.png", title: "9Lorem ipsum, dolor sit amet consectetur adipisicing elit.", videoUrl: "", thumbnailUrl: "https://images.pexels.com/photos/1293265/pexels-photo-1293265.jpeg", channelName: "Codder", view: "7M", publishedTime: "1 year ago", descraption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, dignissimos doloremque. Optio praesentium, suscipit culpa unde libero dolores porro, ex dolore doloremque exercitationem id, nisi pariatur eos. Tempora, maiores omnis!" },

    ]
    return (
        <>
            <Navbar />


            < div className='w-full h-full fixed md:p-3  flex-row    top-14 md:pb-20 pb-28  ' >

                <SideBar/>

                <div className=' w-full md:w-[95%]  h-full md:ml-[5%]  md:p-3  grid grid-cols-1 md:grid-cols-3   sm:grid-cols-2 sm:gap-3  md:gap-6 myDiv  top-14 md:pb-20 pb-28  '>


                    <div className='  overflow-scroll w-full h-full fixed md:p-3   myDiv  top-14 md:pb-20 pb-28  '>


                        <div className='w-full h-32  flex'>
                            <div className='w-[30%] md:w-fit ml-4 h-full flex justify-end pr-4 items-center  '>
                                <div className='  flex w-20 h-20 rounded-full   overflow-hidden ' >
                                    <img src={avatar} alt="avatar" className='w-full h-full object-cover' />
                                </div>
                            </div>
                            <div className='w-[70%] h-full  flex  flex-col  justify-center'>
                                <h1 className='text-2xl font-thin'>{fullName}</h1>
                                <p className='font-thin text-gray-400 text-sm flex'>@{userName} <span><Dot /></span> <span className='flex items-center  cursor-pointer'>view channel <ChevronRight size={16} /> </span></p>
                            </div>
                        </div>


                        <div className='w-full h-10 overflow-x-scroll gap-2 myDivX flex  items-center px-2 '>
                            <div className='bg-gray-800  p-2 rounded-full px-4 font-thin text-sm flex items-center  justify-center gap-1'><CircleUserRound size={16} /> Swich account</div>
                            <div className='bg-gray-800  p-2 rounded-full px-4 font-thin text-sm flex items-center  justify-center gap-1'><Pencil size={16} /> Edit Profile</div>

                        </div>

                        <div>
                            <div className='flex w-full justify-between px-4 mt-6'>
                                <h1 className='font-semibold text-2xl'>
                                    History
                                </h1>
                                <span className='hover:bg-gray-800 px-3 rounded-full flex justify-center items-center cursor-pointer border border-gray-400 '>
                                    view all
                                </span>
                            </div>
                            <div className='w-full min-h-56 h-fit gap-5  overflow-x-scroll myDivX flex p-2' >
                                {videos}
                            </div>
                        </div>

                        <div>
                            <div className='flex w-full justify-between px-4 mt-6'>
                                <h1 className='font-semibold text-2xl'>
                                    Playlists
                                </h1>
                                <p className='flex items-center justify-center gap-2'>
                                    <span className=' cursor-pointer hover:bg-gray-800 rounded-full p-1'>
                                        <Plus />
                                    </span>
                                    <span className='hover:bg-gray-800 px-3 rounded-full flex justify-center items-center cursor-pointer py-1 border border-gray-400'>
                                        view all
                                    </span>
                                </p>
                            </div>
                            <div className='w-full min-h-56 h-fit gap-5  overflow-x-scroll myDivX flex p-2' >
                                {videos}
                            </div>
                        </div>

                        <div className='w-full h-10  flex items-center  hover:bg-gray-800  cursor-pointer'>
                            <h1 className='px-5 flex  items-center'> <Video className='mr-4' size={20} /> <span className='font-thin text-sm'>Your videos</span></h1>
                        </div>

                        <div className='w-full h-10  flex items-center  hover:bg-gray-800 cursor-pointer  '>
                            <h1 className='px-5 flex  items-center'> <ArrowDownToLine size={20} className='mr-4' /><span className='font-thin text-sm'>Downlaods</span></h1>
                        </div>
                        <hr className='mt-3 mb-3' />

                        <div className='w-full h-10  flex items-center  mb-9  hover:bg-gray-800  cursor-pointer'>
                            <h1 className='px-5 flex  items-center'> <MessageCircleQuestionMark size={20} className='mr-4' /><span className='font-thin text-sm'>Help and feedback</span></h1>
                        </div>
                    </div>


                </div>

            </div >

        </>
    )
}

export default User
