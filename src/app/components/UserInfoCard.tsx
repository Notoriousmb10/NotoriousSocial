import React from "react";

const UserInfoCard = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <span className="font-medium text-slate-500">User Information</span>
        <span className="font-medium text-blue-500">See all</span>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-2xl flex gap-2 items-center">
          Yash Bhingarde <span className="text-sm">@yash_mb10</span>
        </span>
        <span className="font-medium text-slate-500">
          Software Developer, Tech Enthusiast, and Lifelong Learner
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex  items-center gap-4">
          <img src="/map.png" alt="" className="h-6 w-6"/>
          <span>Living In <span className='font-medium'>New York</span></span>
        </div>
        <div className="flex  items-center gap-4">
          <img src="/school.png" alt="" className="h-6 w-6"/>
          <span>Went to <span className='font-medium'>Stanford University</span></span>
        </div>
        <div className="flex  items-center gap-4">
          <img src="/work.png" alt="" className="h-6 w-6"/>
          <span>Currently working at <span className='font-medium'>Google </span></span>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-6 flex-grow">
        <div className="flex items-center gap-2">
            <img src="/link.png" alt="" className="h-6 w-6"/>
          <span className="font-medium text-blue-500">yash.dev</span>
          <div className="flex items-center gap-2">
            <img src="/date.png" alt="" className="h-6 w-6"/>
            <span className="text-[16px] font-medium text-slate-500">Joined January 2023</span>
          </div>
        </div>
        <button className="bg-blue-500 rounded-md p-1 text-white">Following</button>
      </div>
    </div>
  );
};

export default UserInfoCard;
