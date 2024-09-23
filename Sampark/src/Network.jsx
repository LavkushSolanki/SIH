import React, { useState } from "react";
import users from "./assets/data/user";
import requests from "./assets/data/request";

const Network = () => {
  const [activeTab, setActiveTab] = useState("suggestions");

  return (
    <div className="p-4 bg-gray-100 mt-28 min-h-screen">
      <div className="connections-container max-w-4xl mx-auto">
        {/* Tabs Section */}
        <div className="flex justify-center mb-4">
          <button
            className={`mx-2 p-2 text-lg ${
              activeTab === "suggestions"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("suggestions")}
          >
            Suggestions
          </button>
          <button
            className={`mx-2 p-2 text-lg ${
              activeTab === "requests"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("requests")}
          >
            Requests
          </button>
        </div>

        {/* Suggestions Tab */}
        {activeTab === "suggestions" && (
          <div>
            <div className="connections-header mb-4 text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                People you may know based on your recent activity
              </h2>
            </div>

            <div className="connections-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="user-card bg-gray-700 shadow-md p-4 rounded-lg flex flex-col items-center"
                >
                  <img
                    src={user.profileImage}
                    alt={`${user.name}'s profile`}
                    className="w-20 h-20 rounded-full mb-4"
                  />
                  <div className="user-info mb-4 text-center bg-gray-700">
                    <h3 className="text-lg font-bold text-white bg-gray-700">
                      {user.name}
                    </h3>
                    <p className="text-white bg-gray-700">{user.title}</p>
                    <p className="text-sm text-white bg-gray-700">
                      {user.mutualConnections} mutual connections
                    </p>
                  </div>
                  <button className="connect-btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Requests Tab */}
        {activeTab === "requests" && (
          <div>
            <div className="connections-header mb-4 text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                Connection Requests
              </h2>
            </div>

            <div className="requests-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {requests.map((request, index) => (
                <div
                  key={index}
                  className="request-card bg-gray-700 shadow-md p-4 rounded-lg flex flex-col items-center"
                >
                  <img
                    src={request.profileImage}
                    alt={`${request.name}'s profile`}
                    className="w-20 h-20 rounded-full mb-4"
                  />
                  <div className="request-info mb-4 text-center">
                    <h3 className="text-lg font-bold text-white bg-gray-700 ">
                      {request.name}
                    </h3>
                    <p className="text-white bg-gray-700 ">{request.title}</p>
                    <p className="text-sm text-white bg-gray-700">
                      {request.mutualConnections} mutual connections
                    </p>
                  </div>
                  <button className="accept-btn bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full">
                    Accept
                  </button>
                  <button className="decline-btn bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full mt-2">
                    Decline
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Spacer to avoid footer overlap */}
      <div className="h-16"></div>
    </div>
  );
};

export default Network;
