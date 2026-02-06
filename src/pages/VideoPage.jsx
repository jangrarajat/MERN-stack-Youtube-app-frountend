import React, { useEffect, useRef, useState } from "react";
import { data, useNavigate, useParams, Link } from "react-router-dom";
import Hls from "hls.js";
import axios from "axios";
import AllVideos from "../components/AllVideos";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar"
import { getAllVideo } from '../data/videos'

export default function VideoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [videos, setVideos] = useState([])
  const [loader, setLoader] = useState(false)
  const timerRef = useRef(null); // 1 sec delay ke liye
  const allData = async () => {
    setLoader(true)
    const allVideoData = await getAllVideo(1)
    setVideos(allVideoData.videos)
    console.log(allVideoData.videos)
    setLoader(false)
  }

  useEffect(() => {
    allData()

  }, [])


  // 🔹 Fetch single video
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("accessToken");

        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/video/single/video/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setVideo(res.data.video);
      } catch (err) {
        console.error(err);
        setVideo(null);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [id]);

  // 🔹 HLS Player (BEST QUALITY FIX)
  useEffect(() => {
    if (!video || !video.playback_url) return;

    const videoEl = videoRef.current;
    let hls;

    if (Hls.isSupported()) {
      hls = new Hls({
        startLevel: -1, // 🔥 auto best quality
        capLevelToPlayerSize: true,
        maxBufferLength: 30,
      });

      hls.loadSource(video.playback_url);
      hls.attachMedia(videoEl);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoEl.play();
      });
    } else if (videoEl.canPlayType("application/vnd.apple.mpegurl")) {
      videoEl.src = video.playback_url;
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, [video]);

  // 🔹 Loading UI
  if (loading) {
    return (
      <p className="text-center mt-20 text-gray-400 text-lg">
        Loading video...
      </p>
    );
  }

  if (!video) {
    return (
      <p className="text-center mt-20 text-red-400">
        Video not found
      </p>
    );
  }


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
    <>
      <Navbar />
      <SideBar />
      <div className="max-w-7xl mx-auto md:px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#0f0f0f]">

        {/* LEFT SIDE – VIDEO PLAYER */}
        <div className="lg:col-span-8 md:ml-20 mt-10">


          <div className="bg-[#0f0f0f]  md:rounded-xl overflow-hidden">
            <video
              ref={videoRef}
              controls
              autoPlay
              preload="metadata"
              controlsList="nodownload"
              poster={video.thumbnailUrl}
              className="w-full aspect-video bg-black"
            />
          </div>

          <h1 className="text-xl font-semibold mt-4 text-white p-2 flex items-center gap-3 ">

            <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-700 flex-shrink-0 ">
              <img
                src={video.ownerAvtar || "/default-avatar.png"}
                alt="Channel Avatar"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/default-avatar.png";
                }}
              />
            </div>


            {video.title}
          </h1>

          <div className="flex items-center justify-between text-sm p-2 text-gray-400 mt-2">
            <span>{video.views || 0} views</span>

            <div className="flex gap-4">
              <button className="hover:text-white"> Like 0</button>
              <button className="hover:text-white"> Share</button>
            </div>
          </div>

          <div className="mt-4 bg-zinc-900 md:rounded-lg p-4 text-gray-300 text-sm leading-relaxed">
            <p className={showFullDesc ? "" : "line-clamp-2"}>
              {video.description}
            </p>

            {video.description?.length > 100 && (
              <button
                onClick={() => setShowFullDesc(!showFullDesc)}
                className="mt-2 text-blue-400 text-xs hover:underline"
              >
                {showFullDesc ? "Show less" : "Show more"}
              </button>
            )}
          </div>

        </div>

        {/* RIGHT SIDE – RECOMMENDED VIDEOS */}
        <div className="lg:col-span-4   mt-12 rounded-xl pb-10 ">
          <h3 className=" hidden md:flex font-semibold mb-3 text-white text-2xl p-2 ">
            Recommended
          </h3>

          <div className="flex flex-col gap-4">
            {videos.map((v) => (
              <Link key={v._id} to={`/watch/${v._id}`}>
                <div
                  className="flex flex-col md:flex-row  gap-3 group cursor-pointer z-10"
                  onMouseEnter={() => handleMouseEnter(v._id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* THUMBNAIL */}
                  <div className="relative md:w-40 aspect-video md:rounded-lg overflow-hidden bg-gray-800 flex-shrink-0 z-0" >
                    {hoveredVideo === v._id ? (
                      <video
                        src={v.secure_url}
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <img
                          src={v.thumbnail}
                          alt={v.title}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded">
                          {Math.floor(v.duration / 60)}:
                          {Math.round(v.duration % 60).toString().padStart(2, "0")}
                        </span>
                      </>
                    )}
                  </div>

                  {/* INFO */}
                  <div className="flex flex-col text-sm p-2">
                    <h4 className="text-white font-medium line-clamp-2">
                      {v.title}
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">
                      {v.channelName || "Wasted Gaming"}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {v.views || 0} views •{" "}
                      {v.createdAt
                        ? new Date(v.createdAt).toLocaleDateString()
                        : "Just now"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>


        </div>
      </div>
    </>
  );
}
