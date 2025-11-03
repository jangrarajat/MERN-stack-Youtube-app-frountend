import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Hls from "hls.js";
import axios from "axios";
import AllVideos from "../components/AllVideos";

export default function VideoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/video/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setVideo(res.data.video);
      } catch (err) {
        setVideo(null);
      }
    };
    fetchVideo();
  }, [id]);

  useEffect(() => {
    if (!video || !video.playback_url) return;
    const videoEl = videoRef.current;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(video.playback_url);
      hls.attachMedia(videoEl);
    } else if (videoEl.canPlayType("application/vnd.apple.mpegurl")) {
      videoEl.src = video.playback_url;
    }
  }, [video]);

  if (!video) return <p className="text-center mt-10 text-gray-400">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <button className="mb-4 px-3 py-1 bg-gray-200 rounded" onClick={() => navigate(-1)}>
        Back
      </button>
      <h2 className="text-2xl font-bold mb-2">{video.title}</h2>
      <div className="bg-black rounded mb-6 overflow-hidden">
        <video
          ref={videoRef}
          controls
          autoPlay
          className="w-full aspect-video bg-black"
          poster={video.thumbnailUrl}
        />
      </div>
      <p className="mb-6 text-gray-400">{video.description}</p>
      <h3 className="text-xl font-semibold mb-4">Recommended Videos</h3>
      <AllVideos excludeId={video._id} />
    </div>
  );
}
