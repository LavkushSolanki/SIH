import React, { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { FaUserCircle, FaEnvelope, FaBell } from "react-icons/fa";
import Notification from "./Event"; // Ensure this import is correct
import { FaUniversity } from "react-icons/fa"; // Import the university icon from react-icons

const Student = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleNotificationClick = () => {
    setIsNotificationOpen((prev) => !prev);
  };

  const notifications = [
    { id: 1, message: "John Doe sent you a connection request." },
    { id: 2, message: "Jane Smith liked your post." },
    { id: 3, message: "Alice Johnson commented on your status." },
    { id: 4, message: "Alice Johnson commented on your status." },
  ];

  return (
    <header className="bg-[#FF8C00] text-[#F5F5F5] py-4 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="./src/assets/image/logo.jpg"
            alt="Logo"
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-full max-w-md mx-4 lg:max-w-lg">
          <input
            className="bg-[#F5F5F5] text-[#333333] px-4 py-[0.65rem] my-[8px] w-full rounded-l-md focus:outline-none border-2 border-[#FFD700] placeholder-[#FF8C00] text-lg"
            placeholder="Search"
            type="text"
          />
          <button
            className="bg-[#FFD700] p-3 rounded-r-md hover:bg-[#FFC107]"
            title="Search"
          >
            <FontAwesomeIcon
              className="text-[#333333] text-2xl"
              icon={faMagnifyingGlass}
            />
          </button>
        </div>

        {/* Icon Section */}
        <div className="flex items-center space-x-8 relative">
          <button onClick={handleNotificationClick} className="relative">
            <FaBell
              className="text-[#F5F5F5] text-3xl cursor-pointer hover:text-[#FFD700]"
              title="Notifications"
            />
            {/* Show notification count */}
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {notifications.length}
              </span>
            )}
          </button>
          <Notification
            isVisible={isNotificationOpen}
            onClose={() => setIsNotificationOpen(isNotificationOpen)}
          />
        </div>
      </div>
    </header>
  );
};

export default Student;
