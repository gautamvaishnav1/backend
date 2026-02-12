import React from "react";
import api from "../../API/api";
import { createFoodAPI } from "../../API/Food";
import { useNavigate } from "react-router-dom";

const CreateFood = () => {
    const Navigate= useNavigate()
    const handleOnSubmit=async(e)=>{

       e.preventDefault()
     console.log(e)
        try {
             const name=e.target.name.value;
             const buffer=e.target.video.files[0];
             const description=e.target.description.value;
             const fd=new FormData()
             fd.append('name',name);
             fd.append('video',buffer);
             fd.append('description',description)
            const res= await api.post(createFoodAPI,fd,{withCredentials:true})
            Navigate('/foodPartner')
            console.log(res.data.role)
        } catch (err) {
          console.log(err?.response?.data?.errors)
            console.log(err?.response?.data?.errors||err?.response?.data?.message)

        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-5" onSubmit={handleOnSubmit}>
        
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Food
        </h2>

        {/* Name */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter food name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Video */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Video File
          </label>
          <input
            type="file"
            name="video"
            accept="video/*"
            className="w-full border rounded-lg file:mr-4 file:py-2 file:px-4 
                       file:rounded-lg file:border-0 
                       file:text-sm file:font-semibold
                       file:bg-blue-50 file:text-blue-700 
                       hover:file:bg-blue-100"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            rows="4"
            name="description"
            placeholder="Write description..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateFood;
