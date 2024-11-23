"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import LeftMenuBar from "./LeftMenuBar";
import Feed from "./Feed";
import RightMenuBar from "./RightMenuBar";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-store/store";
import { connectDB } from "../mongoDB/page";
const ProfileCard = () => {
  const { user } = useUser();

  const name = useSelector((state: RootState) => state.user.name);
  useEffect(() => {
    console.log("User details:", user); // Log the user details
  }, [user]);

  useEffect(() => {
    connectDB();

    console.log("MongoDB connected");
  }, []);

  useEffect(() => {
    const addUser = async () => {
      try {
        const resp: Response = await fetch("/api/add-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: user?.id,
            fullName: user?.fullName,
            email: user?.primaryEmailAddress?.emailAddress,
            image: user?.imageUrl,
          }),
        });

        if (!resp.ok) {
          const errorText = await resp.text(); // Get the response text for debugging
          console.error("Error response:", errorText);
          throw new Error(`HTTP error! status: ${resp.status}`);
        }

        const data = await resp.json();
        console.log("User  added:", data);
      } catch (error) {
        console.log("Error adding user:", error);
      }
    };

    if (user) {
      addUser();
    }
  }, [user]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-sm flex flex-col gap-8">
      <div className="h-20 relative ">
        <Image
          src="https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          fill
          className="rounded-md
       object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/28891140/pexels-photo-28891140/free-photo-of-pensive-man-sitting-inside-a-car.jpeg?auto=compress&cs=tinysrgb&w=600"
          height={48}
          width={48}
          alt=""
          className="rounded-full w-12 h-12 
      object-cover absolute left-0 right-0
      m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="font-semibold">{name || "User"}</h2>

        <span className="font-medium text-slate-500 flex items-center justify-center gap-1">
          <span className="text-[10px]">🔵</span> 502 Followers
        </span>
        <button className="bg-blue-500 px-2 py-1  text-white rounded-sm">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
