import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions.js";
import { FiUser } from "react-icons/fi";
import { PiStudent } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import GrowTogetherLogo from '../assets/growTogetherLogo.png'

const Navbar = (item) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const activeNavItem = item.page;

  const handleClick = (route) => {
    navigate(route);
  };

  function handleLogout() {
    dispatch(logout());
    navigate("/");
  }

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img className="w-52" src={GrowTogetherLogo} alt="" />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-row items-center justify-center space-x-6 hidden md:flex">
        <NavItem
          active={activeNavItem === "tutor"}
          onClick={() => handleClick("/tutor")}
          tooltip="Teach"
          Icon={LiaChalkboardTeacherSolid}
        />
        <NavItem
          active={activeNavItem === "learner"}
          onClick={() => handleClick("/learner")}
          tooltip="Learn"
          Icon={PiStudent}
        />
        <NavItem
          active={activeNavItem === "search"}
          onClick={() => handleClick("/search")}
          tooltip="Search"
          Icon={IoIosSearch}
        />
        <NavItem
          active={activeNavItem === "notification"}
          onClick={() => handleClick("/notification")}
          tooltip="Notification"
          Icon={IoMdNotificationsOutline}
        />
        <a
          href="#"
          className="text-gray-700 hover:text-teal-600 transition-all"
        >
          Become a Mentor
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-teal-600 transition-all"
        >
          Find a Mentor
        </a>
        <button
          className="px-4 py-2 text-white bg-teal-600 rounded hover:bg-teal-700"
          onClick={() => handleClick("/signup")}
        >
          Signup
        </button>
        <button
          className="px-4 py-2 text-teal-600 border border-teal-600 rounded hover:bg-teal-600 hover:text-white"
          onClick={() => handleClick("/login")}
        >
          Login
        </button>
        <NavItem
          active={activeNavItem === "profile"}
          onClick={() => handleClick("/profile")}
          tooltip="Profile"
          Icon={FiUser}
        />
      </div>

      {/* Logout Button */}
      <div className="flex items-center justify-center md:hidden">
        <button
          className="bg-[rgba(137,57,169,0.2)] backdrop-blur-md w-full p-2 text-white rounded-md shadow-lg transition-transform transform hover:scale-95"
          onClick={handleLogout}
        >
          <MdOutlineLogout className="text-2xl" />
        </button>
      </div>
    </nav>
  );
};

const NavItem = ({ active, onClick, tooltip, Icon }) => {
  return (
    <div className="relative group flex flex-col items-center">
      <button
        className={`p-2 rounded-full transition-transform ${
          active
            ? "text-teal-600 scale-95 shadow-[0_0_7px_rgb(0,128,128)]"
            : "text-gray-700 hover:text-teal-600 hover:scale-95 hover:shadow-[0_0_3px_rgb(173,216,230)]"
        }`}
        onClick={onClick}
      >
        <Icon className="text-2xl" />
      </button>
      <span className="absolute bottom-[110%] left-1/2 -translate-x-1/2 px-1 py-0.5 text-xs bg-gray-700 text-white rounded opacity-0 transition-opacity group-hover:opacity-100">
        {tooltip}
      </span>
      <div
        className={`w-1 h-[70%] ${
          active ? "bg-teal-600 shadow-[0_0_15px_teal]" : "bg-transparent"
        } rounded-full`}
      ></div>
    </div>
  );
};

export default Navbar;
