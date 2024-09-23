import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faRetweet,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import postsData from "./assets/data/data";
import {
  FaHome,
  FaHandHoldingHeart,
  FaNetworkWired,
  FaBriefcase,
} from "react-icons/fa"; 
import Story from "./Story";

const Home = () => {
  return (
    <div className="bg-gray-100 mt-24 text-black min-h-screen p-4">
      {/* Stories */}
      <h1 className="font-bold text-3xl text-center">Success Stories</h1>
      <div className="cursor-pointer">
      <Story/>
      </div>
      {/* Main content loop for posts */}
      {postsData.map((post) => (
        <div
          key={post.id}
          className="mt-6 max-w-2xl mx-auto bg-white p-4 shadow-md rounded-lg"
        >
          {/* Post header */}
          <div className="flex justify-between">
            <div className="flex space-x-4 items-center">
              <img
                src="../public/image/sit_logo.jpg" // Placeholder for post-specific author image
                alt="Author Logo"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-bold">{post.author}</h4>
                <p className="text-sm text-gray-500">
                  {post.time} {post.edited && "• Edited"}
                </p>
              </div>
            </div>
            <div className="text-gray-500">•••</div>
          </div>

          {/* Post content */}
          <p className="mt-4">{post.postText}</p>

          {/* Post image */}
          {post.imageUrl && (
            <div className="mt-4">
              <img
                src={post.imageUrl}
                alt="Post"
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}

          {/* Action buttons (Like, Comment, Repost, Send) */}
          <div className="flex justify-around mt-4 text-gray-500">
            <button className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faThumbsUp} />
              <span>Like</span>
            </button>
            <button className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faComment} />
              <span>Comment</span>
            </button>
            <button className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faRetweet} />
              <span>Repost</span>
            </button>
            <button className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faShare} />
              <span>Send</span>
            </button>
          </div>

          {/* Like count */}
          <div className="mt-4 text-sm text-gray-500">
            <span>
              {post.likedBy[0]} and {post.likeCount} others liked this
            </span>
          </div>
        </div>
      ))}

      {/* Spacer to avoid footer overlap */}
      <div className="h-16"></div>
    </div>
  );
};

export default Home;
