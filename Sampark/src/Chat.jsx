import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const navigate = useNavigate();

  const chats = [
    {
      name: "Shubham Kumar",
      message: "Hello Lavkush, I hope you're doing well.",
      time: "Sep 15",
      imgSrc: "https://m.media-amazon.com/images/I/51rayl0HnRL._SY741_.jpg",
      conversation: [
        { sender: "Shubham", text: "Hello Lavkush, I hope you're doing well." },
        {
          sender: "You",
          text: "Hey Shubham, I'm doing great! How about you? Any updates on the job referral?",
        },
        {
          sender: "Shubham",
          text: "Yes, I spoke with the HR team, and they asked for your updated resume. Can you share it?",
        },
        { sender: "You", text: "Sure! I'll email it right away." },
      ],
    },
    {
      name: "Piyush Kumar",
      message: "Hello Lavkush, regarding the project position...",
      time: "Sep 12",
      imgSrc: "https://m.media-amazon.com/images/I/51rayl0HnRL._SY741_.jpg",
      conversation: [
        {
          sender: "Piyush",
          text: "Hello Lavkush, regarding the project position, the client is impressed with your portfolio.",
        },
        {
          sender: "You",
          text: "That’s great news! What are the next steps?",
        },
        {
          sender: "Piyush",
          text: "We’ll have a technical interview in the next few days. I’ll keep you posted.",
        },
        {
          sender: "You",
          text: "Looking forward to it. Thanks for the update!",
        },
      ],
    },
    {
      name: "Rahul Kumar Singh",
      message: "I need a referral for the Software Developer position.",
      time: "Aug 31",
      imgSrc: "https://m.media-amazon.com/images/I/51rayl0HnRL._SY741_.jpg",
      conversation: [
        {
          sender: "Rahul",
          text: "Hey Lavkush, I need a referral for the Software Developer position at your company.",
        },
        {
          sender: "You",
          text: "Sure, send me your resume, and I'll forward it to the hiring team.",
        },
        { sender: "Rahul", text: "Thanks! Sending it right now." },
        { sender: "You", text: "Got it. I'll let you know once it's done." },
      ],
    },
    {
      name: "Alisha Singh",
      message: "Can you help me with my job application?",
      time: "Aug 31",
      imgSrc: "https://m.media-amazon.com/images/I/51rayl0HnRL._SY741_.jpg",
      conversation: [
        {
          sender: "Alisha",
          text: "Hey Lavkush, can you help me with my job application for the marketing role?",
        },
        {
          sender: "You",
          text: "Of course! Do you need help with the resume or cover letter?",
        },
        {
          sender: "Alisha",
          text: "Both, actually. Can I share them with you?",
        },
        { sender: "You", text: "Absolutely, feel free to share them." },
      ],
    },
    {
      name: "Tushar",
      message: "Did you check out the company updates?",
      time: "Aug 31",
      imgSrc: "https://m.media-amazon.com/images/I/51rayl0HnRL._SY741_.jpg",
      conversation: [
        {
          sender: "Tushar",
          text: "Hey Lavkush, did you check out the recent updates from the company?",
        },
        {
          sender: "You",
          text: "Not yet, but I’ll look into them by the end of the day.",
        },
        {
          sender: "Tushar",
          text: "Great! They’re making some exciting changes for tech roles.",
        },
        {
          sender: "You",
          text: "Awesome! I’ll make sure to review it. Thanks for the heads-up!",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen max-w-7xl mx-auto p-4 bg-gray-100">
      {/* Chat list on the left */}
      <div
        className={`w-full md:w-1/3 bg-white shadow-lg rounded-lg overflow-hidden ${
          selectedChat !== null ? "hidden md:block" : ""
        }`}
      >
        <div className="p-4 bg-blue-600 text-white flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold">Messaging</h2>
          <button
            className="text-white hover:bg-blue-800 px-4 py-2 rounded-lg transition-colors duration-300"
            onClick={() => navigate("/alumni")}
          >
            Home
          </button>
        </div>

        <div className="mt-4">
          <div className="space-y-4 px-4 overflow-y-auto h-[60vh] md:h-[80vh] overflow-x-hidden">
            {chats.map((chat, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedChat === index ? "bg-blue-100" : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedChat(index)}
              >
                <img
                  src={chat.imgSrc}
                  alt={chat.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900 truncate">
                      {chat.name}
                    </span>
                    <span className="text-sm text-gray-600 flex-shrink-0">
                      {chat.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">
                    {chat.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conversation area on the right */}
      <div
        className={`w-full md:w-2/3 bg-white p-4 shadow-lg rounded-lg transition-all duration-300 ${
          selectedChat === null ? "hidden md:block" : ""
        }`}
      >
        {selectedChat !== null ? (
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-bold text-blue-600">
                {chats[selectedChat].name}
              </h2>
              <div className="flex items-center">
                <button
                  className="md:hidden text-blue-600"
                  onClick={() => setSelectedChat(null)}
                >
                  Back
                </button>
              </div>
            </div>
            <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow-md h-[60vh] md:h-[70vh] overflow-y-auto">
              {chats[selectedChat].conversation.map((msg, idx) => (
                <div
                  key={idx}
                  className={`mb-4 ${
                    msg.sender === "You" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block px-4 py-2 rounded-lg ${
                      msg.sender === "You"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-900"
                    }`}
                  >
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full p-2 border rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="ml-4 bg-blue-600 text-white py-2 px-4 rounded-lg">
                Send
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-full text-gray-500">
            Select a conversation to view
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
