import React from "react";
import {
  FaHome,
  FaHandHoldingHeart,
  FaNetworkWired,
  FaBriefcase,
} from "react-icons/fa"; 


const Footer = ({ section, setSection }) => {
  return (
    <div className="fixed bottom-0 w-full bg-[#FFC107] text-[#F5F5F5] flex justify-around items-center py-4">
      {/* Home icon */}
      <FaHome
        className="text-4xl cursor-pointer"
        title="Home"
        onClick={() => {
          setSection("Home");
        }}
      />
      {/* Donation icon */}
      <FaHandHoldingHeart
        className="text-4xl cursor-pointer"
        onClick={() => {
          setSection("Donation");
        }}
        title="Donation"
      />
      <FaBriefcase
        onClick={() => {
          setSection("Job");
        }}
        className="text-4xl cursor-pointer"
        title="Job Portal"
      />
      {/* Network icon */}
      <FaNetworkWired
        onClick={() => {
          setSection("Network");
        }}
        className="text-4xl cursor-pointer"
        title="Network"
      />
    </div>
  );
};

export default Footer;
