import React, {useState} from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { CiLight } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import Profile from "./Profile";

const TopBar = () => {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(prevState => !prevState)
  }

  return (
    <div className="p-12 flex bg-gray-900">
      <Link to="/">
        <h1 className="text-white text-2xl font-bold">Tech Monday</h1>
      </Link>
      <div className="flex text-2xl gap-4 text-white absolute right-10">
        <AiOutlineSearch />
        <CiLight />
        <RiArrowDropDownLine onClick={toggleProfile} />
      </div>
      {showProfile && <Profile toggleProfile={toggleProfile} />}
    </div>
  );
};

export default TopBar;
