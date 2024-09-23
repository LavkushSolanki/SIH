import React, { useState, useEffect, useRef } from "react";

const notifications = [
  { id: 1, message: "Silicon College has started E-FEST 6.0.Click for more information." },
  { id: 2, message: "Startup Gujarat has started a new scheme for graduate of 2025" },
  { id: 3, message: "Silicon College has taken a initiative to for planting 300 plants this wednesday." },
];

const Notification = ({ isVisible, onToggle }) => {
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target) &&
        !event.target.closest(".fa-bell")
      ) {
        onToggle(); // Toggle visibility on click outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onToggle]);

  if (!isVisible) return null;

  return (
    <div
      ref={notificationRef}
      className="absolute right-0 mt-8 w-72 bg-white shadow-lg rounded-lg p-4 z-50"
      style={{ top: "50px" }}
    >
      <h4 className="text-lg font-bold mb-3 text-gray-800">Notifications</h4>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id} className="mb-3">
              <p className="text-gray-700 text-sm hover:bg-gray-100 p-2 rounded-md cursor-pointer transition">
                {notification.message}
              </p>
              <hr className="border-gray-300" />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No new notifications</p>
      )}
    </div>
  );
};

export default Notification;
