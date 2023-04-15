import React from "react";
import { Link } from "react-router-dom"
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineBookOpen } from "react-icons/hi";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
  return (
    <div className="bg-gray-900">
      <div className="flex text-white w-screen lg:w-3/5 mx-auto pt-2 px-3 lg:pt-8 lg:gap-8">
        <div className="flex flex-col flex-1">
          <Link to="/:id">
            <h1 className="font-bold text-xl lg:text-4xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit
            </h1>
          </Link>
          <div className="mt-1 flex gap-4 text-xs text-gray-400 lg:mt-3 lg:text-lg">
            <div className="flex items-center gap-1">
              <AiOutlineCalendar />
              <span>Jul 16, 2022</span>
            </div>
            <div className="flex items-center gap-1">
              <HiOutlineBookOpen />
              <span>3 min read</span>
            </div>
          </div>
          <Link to="/:id">
            <p className="mt-1 text-sm text-gray-400 lg:mt-3 lg:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit aspernatur iste beatae,
            </p>
          </Link>
        </div>
        <div className="flex">
          <Link to="/:id">
            <img
              src="https://images.pexels.com/photos/1013516/pexels-photo-1013516.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="pic"
              className="hidden lg:block rounded-xl max-h-56 object-cover object-center flex-1"
            />
          </Link>
        </div>
      </div>
      <div className="p-2">
        <Link to="/:id">
          <img
            src="https://images.pexels.com/photos/1013516/pexels-photo-1013516.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="pic"
            className="rounded-xl h-44 w-full object-cover object-center lg:hidden"
          />
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
