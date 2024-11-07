import LeftMenuBar from "./components/LeftMenuBar";
import RightMenuBar from "./components/RightMenuBar";
import Feed from "./components/Feed";
import Stories from "./components/Stories";
import AddPost from "./components/AddPost";

const Homepage = () => {
  return (
    <div className="bg-slate-100 p-10 flex gap-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenuBar />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div>
          <Stories />
        </div>
        <div className="py-4">
          <AddPost />
        </div>
        <div className="py-4">
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%] xl:w-[30%]">
        <RightMenuBar />
      </div>
    </div>
  );
};

export default Homepage;