import React, { useState, useRef, useEffect } from 'react'
import VideoCard from './VideoCard';
import { videosData } from './videosData';

function Videos() {
    const [avatar, setAvatar] = useState("https://i.pinimg.com/736x/e8/7a/b0/e87ab0a15b2b65662020e614f7e05ef1.jpg")
  
      
    const videoRef = useRef(null);

    useEffect(() => {
        const videoEl = videoRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoEl.play();   // viewport me aane pr play
                    } else {
                        videoEl.pause();  // bahar jane pr pause
                    }
                });
            },
            { threshold: 0.5 } // 50% video visible hone par trigger hoga
        );

        if (videoEl) observer.observe(videoEl);

        return () => {
            if (videoEl) observer.unobserve(videoEl);
        };
    }, []);


    return (
        <>
            <div className='myDiv fixed z-0 top-20 overflow-scroll  bottom-12 w-full h-full  bg-gray-950'>
                {/* -------------------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {videosData.map((video) => (
                        <VideoCard
                            key={video.id}
                            videoUrl={video.videoUrl}
                            thumbnailUrl={video.thumbnailUrl}
                            avatar={video.avatar}
                            title={video.title}
                            channelName={video.channelName}
                            views={video.views}
                            timeAgo={video.timeAgo}
                        />
                    ))}
                </div>
                {/* ------------------------------- */}

            </div>
        </>
    )
}

export default Videos
