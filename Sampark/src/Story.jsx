import React from "react";
import { storyData } from "./assets/data/story";

const Story = () => {
  return (
    <div className="flex space-x-4 overflow-x-auto scrollbar-none p-4">
      {storyData.map((story) => (
        <div key={story.name} className="flex flex-col items-center">
          <img
            src={story.img}
            alt={story.name}
            className={`rounded-full border-4 p-1
            ${!story.viewed ? "border-[#ec9100]" : "border-none"} 
              lg:h-28 lg:w-28 md:h-20 md:w-16 h-16 w-24 sm:h-20 sm:w-16 object-cover`}
          />
          <div className="text-sm sm:text-base font-medium mt-2">
            {story.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Story;
