import { Dot, EllipsisVertical, Film, House, TvMinimalPlay } from 'lucide-react'
import React, { use, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageLoader from './PageLoader'
import SideBar from './SideBar'
import UserDeitles from './UserDeitles'




function AllVideos() {
    const [videos, setVideos] = useState()
    const [Loader, setLoader] = useState(false)
    const [avatar, setAvatar] = useState(" ")
    const navigate = useNavigate()


    useEffect(() => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        setAvatar(user.avatar)

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

    useEffect(() => {
        setVideos(() => (
            videoData.map((video) => (
                <div className='h-fit w-full  pb-2 ' key={video.id}>
                    <div className='h-60 md:h-72 w-full   '>
                        <img className='w-full h-full md:rounded-lg' src={video.thumbnailUrl} alt="" />
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
                            <div className=' hidden md:flex hover:bg-gray-700   h-full p-1 rounded-full'>
                                <EllipsisVertical className=' cursor-pointer' />
                            </div>

                        </div>
                    </div>
                </div>
            ))
        ))


    }, [])








    return (
        <>

            <div className='w-full h-full fixed md:p-3  flex-row    top-14 md:pb-20 pb-28  '>

                <SideBar/>
              
                <div className=' w-full md:w-[95%]   h-full md:ml-[5%]  md:p-3  grid grid-cols-1 md:grid-cols-3   sm:grid-cols-2 sm:gap-3  md:gap-6 myDiv  top-14 md:pb-20 pb-28  '>

                    {Loader ? (<><PageLoader /></>) : (<>{videos}</>)}

                </div>
            </div>




        </>
    )
}

export default AllVideos







   