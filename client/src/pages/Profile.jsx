import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    goal: "",
    gender: "",
    dateOfBirth: "",
    location: "",
    industry: "",
    area_of_expertise: "",
    accountType: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const access_token = Cookies.get("access_token");
      const refresh_token = Cookies.get("refresh_token");

      if (refresh_token && access_token) {
        const res = await fetch("/api/profile/getUserDetails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ access_token }),
          credentials: "include",
        });
        const response = await res.json();
        if (response) {
          setData(response.data);
        }
      } else {
        navigate("/sign-up");
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setData((prevData) => ({...prevData, [e.target.name] : e.target.value}))
  }
  return (
    <div className={`flex flex-col gap-y-2 justify-center items-center w-full h-full ${isEditing ? "sm:h-[40rem]" : "sm:h-[33.6rem]"} p-3 overflow-x-hidden`}>
      <div className="w-4/5 sm:w-1/2 rounded-lg border border-gray-100 shadow-sm">
        <dl className="divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Title</dt>
            {isEditing ? (
              <input type="text" name="accountType" onChange={(e) => {handleInputChange(e)}} className="border border-black rounded-md focus:outline-none p-2" value={data.accountType}></input>
            ) : (
              <dd className="text-gray-700 sm:col-span-2">
                {data.accountType}
              </dd>
            )}
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Userame</dt>
            {isEditing ? (
              <input type="text" name="username" onChange={(e) => {handleInputChange(e)}} className="border border-black rounded-md focus:outline-none p-2" value={data.username}></input>
            ) : (
              <dd className="text-gray-700 sm:col-span-2">{data.username}</dd>
            )}
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Email</dt>
            {isEditing ? (
              <input type="text" name="email" onChange={(e) => {handleInputChange(e)}} className="border border-black rounded-md focus:outline-none p-2" value={data.email}></input>
            ) : (
              <dd className="text-gray-700 sm:col-span-2">{data.email}</dd>
            )}
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Phone</dt>
            {isEditing ? (
              <input type="text" name="phone" onChange={(e) => {handleInputChange(e)}} className="border border-black rounded-md focus:outline-none p-2" value={data.phone}></input>
            ) : (
              <dd className="text-gray-700 sm:col-span-2">{data.phone}</dd>
            )}
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Gender</dt>
            {isEditing ? (
              <input type="text" name="gender" onChange={(e) => {handleInputChange(e)}} className="border border-black rounded-md focus:outline-none p-2" value={data.gender}></input>
            ) : (
              <dd className="text-gray-700 sm:col-span-2">{data.gender}</dd>
            )}
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Location</dt>

            {isEditing ? (
              <input type="text" name="location" onChange={(e) => {handleInputChange(e)}} className="border border-black rounded-md focus:outline-none p-2" value={data.location}></input>
            ) : (
              <dd className="text-gray-700 sm:col-span-2">{data.location}</dd>
            )}
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Industry</dt>
            {isEditing ? (
              <input type="text" name="industry" onChange={(e) => {handleInputChange(e)}} className="border border-black rounded-md focus:outline-none p-2" value={data.industry}></input>
            ) : (
              <dd className="text-gray-700 sm:col-span-2">{data.industry}</dd>
            )}
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Area of Expertise</dt>
            {isEditing ? (
              <input type="text" name="area_of_expertise" onChange={(e) => {handleInputChange(e)}} className="border border-black rounded-md focus:outline-none p-2" value={data.area_of_expertise}></input>
            ) : (
              <dd className="text-gray-700 sm:col-span-2">
                {data.area_of_expertise}
              </dd>
            )}
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Career Goal</dt>
            {isEditing ? (
              <input type="text" name="goal" onChange={(e) => {handleInputChange(e)}} className="border border-black rounded-md focus:outline-none p-2" value={data.goal}></input>
            ) : (
              <dd className="text-gray-700 sm:col-span-2">{data.goal}</dd>
            )}
          </div>
        </dl>
      </div>
      {isEditing ? (
        <button
          className="w-[12rem] h-[2.4rem] rounded-lg text-gray-50 bg-gray-950"
          onClick={() => {setIsEditing(false); console.log(data)}}
        >
          Save
        </button>
      ) : (
        <button
          className="w-[12rem] h-[2.4rem] rounded-lg text-gray-50 bg-gray-950"
          onClick={() => {setIsEditing(true); console.log(data)}}
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default Profile;
