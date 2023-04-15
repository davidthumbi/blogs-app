import React from "react";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdOutlineCreate } from "react-icons/md";
import { CiLogout } from "react-icons/ci";

const Profile = (props) => {
  const authLogin = true;
  return (
    <div className="absolute bg-white px-10 py-4 right-10 top-20 rounded-md text-gray-600">
      {authLogin ? (
        <>
          <Link to="/create_blog" className="flex gap-2 mb-2 items-center">
            <MdOutlineCreate className="text-gray-900" />
            <button onClick={props.toggleProfile}>Create Post</button>
          </Link>
          <Link to="/settings" className="flex gap-2 mb-2 items-center">
            <RiUserSettingsLine className="text-green-500" />
            <button onClick={props.toggleProfile}>User Settings</button>
          </Link>
          <Link to="/login" className="flex gap-2 mb-2 items-center">
            <CiLogout className="text-red-500" />
            <button onClick={props.toggleProfile}>Logout</button>
          </Link>
        </>
      ) : (
        <Link to="/login" className="flex gap-2 mt-2 items-center">
          <MdLogout className="text-blue-600" />
          <button onClick={props.toggleProfile}>Log In</button>
        </Link>
      )}
    </div>
  );
};

export default Profile;
