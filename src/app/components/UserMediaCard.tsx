import React from "react";
import Image from "next/image";
import Link from "next/link";

const UserMediaCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="font-medium text-slate-500">User Media</span>
        <span className="font-medium text-blue-500">See all</span>
      </div>
      <div className="grid grid-cols-4 p-3 gap-2">
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2023/02/02/10/02/sunset-7762468_640.jpg"
            className="h-20 w-16 rounded-md"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2023/02/02/10/02/sunset-7762468_640.jpg"
            className="h-20 2-16 rounded-md"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2023/02/02/10/02/sunset-7762468_640.jpg"
            className="h-20 2-16 rounded-md"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2023/02/02/10/02/sunset-7762468_640.jpg"
            className="h-20 2-16 rounded-md"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2023/02/02/10/02/sunset-7762468_640.jpg"
            className="h-20 2-16 rounded-md"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2023/02/02/10/02/sunset-7762468_640.jpg"
            className="h-20 2-16 rounded-md"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2023/02/02/10/02/sunset-7762468_640.jpg"
            className="h-20 2-16 rounded-md"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2023/02/02/10/02/sunset-7762468_640.jpg"
            className="h-20 2-16 rounded-md"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default UserMediaCard;
