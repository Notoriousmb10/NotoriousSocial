import React from "react";
import LeftMenuBar from "./LeftMenuBar";
import Feed from "./Feed";
import RightMenuBar from "./RightMenuBar";
import Image from "next/image";

const ProfileCard = () => {
  return <div className="bg-white p-4 rounded-lg shadow-md text-sm flex flex-col gap-6">
    <div className="h-20 relative ">
      <Image src="https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill className="rounded-md
       object-cover"/>
      <Image src="https://images.pexels.com/photos/28891140/pexels-photo-28891140/free-photo-of-pensive-man-sitting-inside-a-car.jpeg?auto=compress&cs=tinysrgb&w=600" height={48} width={48} alt=""  className="rounded-full w-12 h-12 
      object-cover absolute left-0 right-0
      m-auto -bottom-6 ring-1 ring-white z-10"/>
    <div>
      <h2>John Doe</h2>
    </div>
    </div>
  </div>;
};

export default ProfileCard;
