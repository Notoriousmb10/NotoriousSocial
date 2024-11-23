'use client'


import React, { useEffect, useRef } from "react";
import { useState } from "react";
const Comment = () => {
  const [isCommentEnable, setIsCommentEnable] = useState(false);
  const commentInputRef = useRef<HTMLInputElement>(null);

  const addComment = () => {
    setIsCommentEnable(true);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      commentInputRef.current &&
      !commentInputRef.current.contains(e.target as Node)
    ) {
      setIsCommentEnable(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-grow justify-center items-center">
        <img
          src="https://images.pexels.com/photos/9895332/pexels-photo-9895332.jpeg?auto=compress&cs=tinysrgb&w=600"
          height={80}
          width={80}
          alt=""
          className="w-6 h-6 rounded-full ring-2 object-cover"
        />
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Write a comment..."
            className={`bg-slate-100 w-full rounded-full px-4 py-0.5 pr-8 focus:outline-none ${
              isCommentEnable ? "h-10" : "h-6"
            }`}
            onFocus={addComment}
            ref={commentInputRef}
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
            🙂
          </span>
        </div>
      </div>
      <div>
        <div className="flex gap-4 bg-slate-100 py-3 px-2 rounded-md items-start">
          <img
            src="https://images.pexels.com/photos/9895332/pexels-photo-9895332.jpeg?auto=compress&cs=tinysrgb&w=600"
            height={80}
            width={80}
            alt=""
            className="w-10 h-10 rounded-full ring-2 object-cover"
          />
          <div className="flex flex-col gap-0">
            <span className="font-medium pb-4">Chris Mark</span>

            <span className="font-normal pb-1">The Wonder Woman</span>
            <div className="flex flex-row gap-4">
              <div
                className="flex justify-center items-center gap-2 bg-slate-100
            rounded-full  cursor-pointer"
              >
                <img src="/like.png" alt="" height={12} width={12} />
                <span className="text-[12px]">
                  <span className="text-gray-300">| </span> 23 likes
                </span>
                <span className="text-[12px]">Reply</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
