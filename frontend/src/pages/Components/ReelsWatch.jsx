import React, { useEffect, useRef, useState } from "react";
import api from "../../API/api";
import { getFoodAPI } from "../../API/Food";

const dummyReels = [
  {
    _id: "1",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    caption: "Big Buck Bunny 🐰",
    user: { name: "rahul_dev" },
  },
  {
    _id: "2",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    caption: "Street food vibes 🔥",
    user: { name: "foodie_amit" },
  },
  {
    _id: "3",
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    caption: "Nature feels 🌸",
    user: { name: "nature_love" },
  },
];

const ReelsWatch = () => {
  const [reels, setReels] = useState([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    const getFoodReels=async()=>{
        
        const res= await api.get(getFoodAPI,{withCredentials:true})
        
    setTimeout(() => setReels(res.data.foodItems), 300);
    }
    getFoodReels()
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.75 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, [reels]);

  return (
    <div className="h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory bg-black">
      <div className="flex justify-center">
        <div className="w-full sm:w-[380px] md:w-[420px]">
          {reels.map((reel, index) => (
            <div
              key={reel._id}
              className="h-[100dvh] w-full snap-start relative flex items-center justify-center"
            >
              {/* Video */}
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={reel.video}
                className="h-full w-full object-cover"
                loop
                muted
                playsInline
                preload="metadata"
              />

              {/* Bottom Left Info */}
              <div className="absolute bottom-20 left-4 text-white">
                <h3 className="font-semibold">@{reel.name}</h3>
                <p className="text-sm opacity-90">{reel.description}</p>
              </div>

              {/* Right Side Actions */}
              {/* <div className="absolute right-4 bottom-20 flex flex-col gap-4 text-white text-xl">
                <button className="active:scale-95">❤️</button>
                <button className="active:scale-95">💬</button>
                <button className="active:scale-95">🔗</button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReelsWatch;
