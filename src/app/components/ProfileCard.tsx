import React from "react";
import LeftMenuBar from "./LeftMenuBar";
import Feed from "./Feed";
import RightMenuBar from "./RightMenuBar";
import Image from "next/image";

const ProfileCard = () => {
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
        <h2 className="font-semibold">John Doe</h2>
        <span className="font-medium text-slate-500 flex items-center justify-center gap-1"><span className="text-[10px]">🔵</span>  502 Followers</span>
        <button className="bg-blue-500 px-2 py-1  text-white rounded-sm">My Profile</button>
      </div>
    </div>
  );
};

export default ProfileCard;
