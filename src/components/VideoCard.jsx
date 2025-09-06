// VideoCard.jsx
import { useRef, useState, useEffect } from "react";



function VideoCard({ videoUrl, thumbnailUrl, avatar, title, channelName, views, timeAgo }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    if (video) {
      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);
    }

    return () => {
      if (video) {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
      }
    };
  }, []);

  return (
    <div className="w-full h-72 bg-black rounded-lg overflow-hidden">
      {/* Video / Thumbnail */}
      <div className="w-full h-[65%] relative">
        {!isPlaying && (
          <img
            src={thumbnailUrl}
            alt="thumbnail"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        )}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          playsInline
          
          src={videoUrl}
        />
      </div>

      {/* Info Section */}
      <div className="flex gap-3 px-2 py-2">
        {/* Channel Avatar */}
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
          <img src={avatar} alt="channel logo" className="w-full h-full object-cover" />
        </div>

        {/* Video Details */}
        <div className="flex flex-col w-full">
          <h2 className="text-sm font-semibold text-white line-clamp-2">
            {title}
          </h2>
          <p className="text-xs text-gray-400">
            {channelName} • {views} views • {timeAgo}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
