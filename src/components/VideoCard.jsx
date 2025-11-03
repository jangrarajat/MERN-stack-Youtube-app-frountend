import React from "react";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer rounded shadow bg-neutral-800 hover:scale-105 transition"
      onClick={() => navigate(`/watch/${video._id}`)}
    >
      <div className="aspect-video bg-black flex items-center justify-center overflow-hidden rounded-t">
        {/* Show thumbnail if available, else fallback */}
        <img
          src={video.thumbnailUrl || "/default-thumb.jpg"}
          alt={video.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-3">
        <h3 className="text-white text-base font-semibold truncate">{video.title}</h3>
        <p className="text-xs text-gray-400 mt-1 truncate">{video.channelName || "Unknown channel"}</p>
      </div>
    </div>
  );
}
