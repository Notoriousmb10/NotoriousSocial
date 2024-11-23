'use client'


import Feed from "@/app/components/Feed";
import LeftMenuBar from "@/app/components/LeftMenuBar";
import RightMenuBar from "@/app/components/RightMenuBar";
import Image from "next/image";
import React from "react";
import { useUser , SignIn } from '@clerk/nextjs';

const page = () => {
  const  { user, isSignedIn } = useUser();

  if (!isSignedIn) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-96px)]">
        <SignIn />
      </div>
    )
  }


  return (
    <div className="flex gap-6 p-6 bg-slate-100">
       <div className="hidden xl:block w-[20%]">
        <LeftMenuBar type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src={"https://images.pexels.com/photos/2377965/pexels-photo-2377965.jpeg?auto=compress&cs=tinysrgb&w=600"}
                alt=""
                fill
                className="rounded-md object-cover"
              />
              <Image
                src={"https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600"}
                alt=""
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">{user.firstName}</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">10</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">100</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">50</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenuBar userId={'user'} />
      </div>
    </div>
  );
};

export default page;
