import React from "react";

const RightMenuBar = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 bg-white p-4 rounded-md">
        <div className="flex justify-between items-center">
          <span className="text-slate-400 font-semibold">Friend Requests</span>
          <span className="text-blue-500 font-semibold text-sm cursor-pointer">
            See all
          </span>
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
                height={80}
                width={80}
                alt=""
                className="w-6 h-6 rounded-full ring-2 object-cover"
              />
              <span className="text-[20px]">Cristiana Alvarez</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/accept.png"
                height={30}
                width={30}
                className="cursor-pointer"
              />
              <img
                src="/reject.png"
                height={30}
                width={30}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600"
                height={80}
                width={80}
                alt=""
                className="w-6 h-6 rounded-full ring-2 object-cover"
              />
              <span className="text-[20px]">Rojer Smith</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/accept.png"
                height={30}
                width={30}
                className="cursor-pointer"
              />
              <img
                src="/reject.png"
                height={30}
                width={30}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=600"
                height={80}
                width={80}
                alt=""
                className="w-6 h-6 rounded-full ring-2 object-cover"
              />
              <span className="text-[20px]">Nancy Brown</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/accept.png"
                height={30}
                width={30}
                className="cursor-pointer"
              />
              <img
                src="/reject.png"
                height={30}
                width={30}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Birthday */}
      <div className="bg-white p-4 flex flex-col gap-4">
        <div>
          <span className="text-slate-400 font-semibold">Birthdays</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://images.pexels.com/photos/27202128/pexels-photo-27202128/free-photo-of-young-woman-in-a-brown-dress-standing-by-the-window-in-an-abandoned-building.jpeg?auto=compress&cs=tinysrgb&w=600"
              height={80}
              width={80}
              alt=""
              className="w-6 h-6 rounded-full ring-2 object-cover"
            />
            <span className="text-[20px]">Olivia Cruise</span>
          </div>
          <div>
            <button className="bg-blue-500 text-white rounded-sm p-1 font-medium text-[14px]">
              Celebrate
            </button>
          </div>
        </div>

        {/* upcomming birthdays */}
        <div className="bg-slate-100 flex p-2 items-center justify-center">
          <img src="/gift.png" alt="" height={60} width={60} />
          <div className="flex flex-col p-4">
            <span className="text-slate-400 font-semibold">
              Upcoming Birthdays
            </span>
            <span className="text-[12px] ">
              See other 16 have their birthday <br /> in the next 7 days
            </span>
          </div>
        </div>
      </div>

      {/* sponsored ads */}
      <div className="bg-white rounded-md p-4 flex flex-col gap-4">
        <div>
          <span className="text-slate-400 font-semibold">Sponsored Ads</span>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/207172/pexels-photo-207172.jpeg?auto=compress&cs=tinysrgb&w=600" 
          className="rounded-md" alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
          <img src="https://images.pexels.com/photos/207172/pexels-photo-207172.jpeg?auto=compress&cs=tinysrgb&w=600" 
          className="rounded-full h-6 w-6 " alt="" />
          <span className="text-blue-500 font-semibold">BigChef Lounge</span>
          </div>
          <span className="text-slate-400 text-sm">Experience the best dining with a beautiful flower-themed ambiance.</span>
          <button className="bg-slate-100 p-1 rounded-md hover:bg-slate-200 font-medium text-slate-500">Learn More</button>
        </div>
      </div>











    </div>
  );
};

export default RightMenuBar;
