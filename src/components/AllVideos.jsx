import { Dot, EllipsisVertical } from 'lucide-react'
import React, { useEffect, useState, useRef } from 'react'
import PageLoader from './PageLoader'
import SideBar from './SideBar'
import { getAllVideo } from '../data/videos'
import { Link } from 'react-router-dom'

function AllVideos() {
    const [videos, setVideos] = useState([])
    const [loader, setLoader] = useState(false)
    const [hoveredVideo, setHoveredVideo] = useState(null); // Kis video par hover hai
    const timerRef = useRef(null); // 1 sec delay ke liye

    const allData = async () => {
        setLoader(true)
        const allVideoData = await getAllVideo(1)
        setVideos(allVideoData.videos)
        setLoader(false)
    }

    useEffect(() => {
        allData()
    }, [])

    // Hover handle functions
    const handleMouseEnter = (videoId) => {
        timerRef.current = setTimeout(() => {
            setHoveredVideo(videoId);
        }, 1000); // 1 second ka delay
    };

    const handleMouseLeave = () => {
        clearTimeout(timerRef.current);
        setHoveredVideo(null);
    };

    return (
        <div className='w-full h-screen flex flex-row py-14 bg-[#0f0f0f]'>
            <SideBar />
            <div className='flex-1 h-full overflow-y-auto  md:p-6 myDiv '>
                {loader ? <PageLoader /> : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:pl-16 gap-x-4 gap-y-8 pb-8'>
                        {videos.map((video) => (
                            <Link to={`/watch/${video._id} `}  >
                            <div
                                className='flex flex-col gap-3 cursor-pointer group'

                               
                                onMouseEnter={() => handleMouseEnter(video._id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {/* Thumbnail & Preview Container */}
                                <div className='relative aspect-video w-full overflow-hidden bg-gray-800 md:rounded-xl'>
                                    {hoveredVideo === video._id ? (
                                        <div className='relative w-full h-full'>
                                            <video
                                                src={video.secure_url}
                                                className='w-full h-full object-cover'
                                                autoPlay
                                                muted
                                                loop
                                            />
                                            {/* Progress Bar (YouTube Style) */}
                                            <div className="absolute bottom-0 left-0 h-1 bg-red-600 transition-all duration-[60s] w-full origin-left scale-x-0 group-hover:scale-x-100"></div>
                                        </div>
                                    ) : (
                                        <>
                                            <img
                                                className='w-full h-full object-cover'
                                                src={video.thumbnail}
                                                alt={video.title}
                                            />
                                            {/* Duration Badge */}
                                            <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-medium">
                                                {Math.floor(video.duration / 60)}:{Math.round(video.duration % 60).toString().padStart(2, '0')}
                                            </span>
                                        </>
                                    )}
                                </div>

                                {/* Video Info Section */}
                                <div className='flex gap-3 px-1'>
                                    <div className='flex-shrink-0'>
                                        <div className='w-10 h-10 rounded-full overflow-hidden'>
                                            <img src={video.ownerAvtar} alt="channel" className='w-full h-full object-cover' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col pr-4 flex-1'>
                                        <h3 className='text-white font-semibold text-sm line-clamp-2 leading-snug'>
                                            {video.title}
                                        </h3>
                                        <div className='text-gray-400 text-xs mt-1'>
                                            <p className='hover:text-white transition-colors'>{video.channelName || "Wasted Gaming"}</p>
                                            <p className='flex items-center'>
                                                {video.views} views <Dot size={16} /> {video.createdAt ? new Date(video.createdAt).toLocaleDateString() : "Just now"}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='ml-auto'>
                                        <EllipsisVertical size={18} className='text-white cursor-pointer opacity-0 group-hover:opacity-100' />
                                    </div>
                                </div>
                            </div>
                            </Link>
                ))}
            </div>
                )}
        </div>
        </div >
    )
}

export default AllVideos;