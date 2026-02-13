import React, { useEffect, useRef, useState } from "react";
import api from "../../API/api";
import { getFoodAPI } from "../../API/Food";
import { NavLink } from "react-router-dom";



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

  const handleOnSubmitLike=async(postId)=>{
    try {
      console.log(postId)
    const res=await api.post('/api/like',{postId},{withCredentials:true})
    
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="h-dvh w-full overflow-y-scroll snap-y snap-mandatory bg-black">
      <div className="flex justify-center">
        <div className="w-full sm:w-95 md:w-105">
          {reels.map((reel, index) => (
            <div
              key={reel._id}
              className="h-dvh w-full snap-start relative flex items-center justify-center"
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
                <NavLink className='border rounded-2xl p-2' to={`/foodPartner/${reel.foodPartner}`} >Join</NavLink>
                <p className="text-sm opacity-90">{reel.description}</p>
              </div>

              {/* Right Side Actions */}
              <div className="absolute right-4 bottom-20 flex flex-col gap-4 text-white text-xl">
                <button onClick={()=>handleOnSubmitLike(reel._id)} className="active:scale-95">❤️</button>
                {/* <button className="active:scale-95">💬</button>
                <button className="active:scale-95">🔗</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReelsWatch;
