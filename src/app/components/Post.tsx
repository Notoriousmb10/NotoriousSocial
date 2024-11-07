"use client";

import Comment from "./Comments";
import { SlOptions } from "react-icons/sl";

const Post = () => {
  return (
    <div>
      <div className="flex flex-shrink-0 justify-between  items-center px-4">
        <div className="flex justify-center items-center gap-4">
          <img
            src="https://images.pexels.com/photos/3426975/pexels-photo-3426975.jpeg?auto=compress&cs=tinysrgb&w=600"
            height={44}
            width={44}
            className="w-11 h-11 rounded-full ring-2"
            alt=""
          />
          <span>Salena Flair</span>
          <span className="text-sm text-gray-500">1 hour ago</span>
        </div>
        <div className="cursor-pointer">
          <SlOptions />
        </div>
      </div>
      <div>
        <div className="flex justify-center p-4 flex-col gap-3">
          <span>Trend with your aura ❤️</span>
          <img
            src="https://images.pexels.com/photos/1649673/pexels-photo-1649673.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="rounded-sm"
            alt=""
          />
          <div className="flex flex-row justify-between items-center p-2 gap-3">
            <div className="flex flex-row gap-4">
              <div
                className="flex justify-center items-center gap-2 bg-slate-100 px-4 py-2
            rounded-full  cursor-pointer"
              >
                <img src="/like.png" alt="" height={24} width={24} />
                <span className="text-sm">
                  <span className="text-gray-300">| </span> 2.4k likes
                </span>
              </div>
              <div
                className="flex justify-center items-center gap-4 bg-slate-100 px-4 py-2
            rounded-full  cursor-pointer"
              >
                <img src="/comment.png" alt="" height={24} width={24} />
                <span className="text-sm">
                  <span className="text-gray-300">| </span>123 comment
                </span>
              </div>
            </div>

            <div
              className="flex justify-center items-center gap-4 bg-slate-100 px-4 py-2
            rounded-full  cursor-pointer"
            >
              <img src="/share.png" alt="" height={24} width={24} />
              <span className="text-sm">
                <span className="text-gray-300">| </span>share
              </span>
            </div>
          </div>
          <>
            <Comment />
          </>
        </div>
      </div>
    </div>
  );
};

export default Post;
