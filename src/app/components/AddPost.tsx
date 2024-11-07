'use client';

import React from "react";
import { VscSend } from "react-icons/vsc";

const AddPost = () => {
  return (
    <div className="p-6 flex gap-4 bg-white shadow-md justify-center items-center">
      <div className="flex flex-shrink-0">
        <img
          src="https://images.pexels.com/photos/9895332/pexels-photo-9895332.jpeg?auto=compress&cs=tinysrgb&w=600"
          height={80}
          width={80}
          alt=""
          className="w-12 h-11 rounded-full ring-2 object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex-grow flex flex-row gap-2">
          <textarea
            placeholder="Whats on your mind..."
            className="px-4 py-2 bg-slate-100 shadow-sm w-full min-h-[100px] rounded-lg resize-none"
            style={{ minHeight: '100px' }}
            rows={1}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              target.style.height = `${target.scrollHeight}px`;
            }}
          />
          <div className="relative top-14 text-lg cursor-pointer">
            <VscSend />
          </div>
        </div>
        <div className="flex flex-row gap-4 cursor-pointer">
          <div className="flex items-center gap-2">
            <img src="/addImage.png" alt="" height={24} width={24} />
            <span className="whitespace-nowrap text-sm">Post Image</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/addvideo.png" alt="" height={24} width={24} />
            <span className="whitespace-nowrap text-sm">Post Video</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/poll.png" alt="" height={24} width={24} />
            <span className="whitespace-nowrap text-sm">Create Poll</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/addevent.png" alt="" height={24} width={24} />
            <span className="whitespace-nowrap text-sm">Add Event</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
