import React, { useEffect, useRef, useState } from "react";
import api from "../../API/api";
import { getFoodAPI } from "../../API/Food";
import { NavLink } from "react-router-dom";



const ReelsWatch = () => {
  const [reels, setReels] = useState([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    const getFoodReels = async () => {
      try {
        const res = await api.get(getFoodAPI, { withCredentials: true });
        setTimeout(() => setReels(res.data.foodItems), 300);
      } catch (error) {
        console.error('Failed to load food reels:', error);
      }
    };
    getFoodReels();
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
    const res=await api.post('/api/user/like',{postId},{withCredentials:true})
    
    } catch (error) {
      console.log(error)
    }
  }

  const handleOnSubmitSave=async(postId)=>{
    try{
      const res=await api.post('/api/user/save',{postId},{withCredentials:true})
    }
    catch(error){
      console.log(error.data)
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

              <div className="absolute bottom-24 left-4 text-white">
                <h3 className="font-semibold">@{reel.name}</h3>
                <p className="text-sm opacity-90">{reel.description}</p>
                <NavLink 
                  className="mt-2 inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition"
                  to={`/foodPartner/${reel.foodPartner}`}
                >
                  Join Partner
                </NavLink>
              </div>

              {/* Right Side Actions */}
              <div className="absolute right-4 bottom-40 flex flex-col  gap-y-5 text-white text-xl">
                <div className="flex flex-col">
                <button onClick={()=>handleOnSubmitLike(reel._id)} className="active:scale-95">❤️</button>
                <h1>Like</h1>
                </div>
                <div className="flex  flex-col">
                <button onClick={()=>handleOnSubmitSave(reel._id)} className="active:scale-95">🔗</button> 
                <h1>Save</h1>
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReelsWatch;
