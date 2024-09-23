import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // Icon for alumni profile if no photo available
import { FiSearch } from "react-icons/fi"; // Search icon
import { BsBriefcase } from "react-icons/bs"; // Job icon
import { jobPosts } from "./assets/data/job";

const JobPortal = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const filteredJobs = jobPosts.filter((job) =>
    job.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-28 mx-auto p-4">
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by company name..."
            className="w-full px-4 py-2 border-2 border-yellow-400 rounded-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-[#1b355b]"
          >
            <div className="flex items-center mb-4">
              {job.alumniPhoto ? (
                <img
                  src={job.alumniPhoto}
                  alt={job.alumniName}
                  className="w-12 h-12 rounded-full"
                />
              ) : (
                <FaUserCircle className="w-12 h-12 text-gray-400" />
              )}
              <div className="ml-4">
                <h3 className="text-xl font-bold text-amber-200">
                  {job.alumniName}
                </h3>
                <p className="text-sm text-gray-100">Posted this job</p>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-yellow-500">
              {job.jobRole}
            </h2>
            <p className="text-lg text-gray-400 mb-2">
              {job.companyName} - {job.location}
            </p>
            <p className="text-gray-50 mb-1">
              <BsBriefcase className="inline mr-2" /> Stipend: {job.stipend}
            </p>
            <p className="text-gray-50 mb-1">Period: {job.period}</p>
            <p className="text-gray-50 mb-1">Eligibility: {job.eligibility}</p>
            <p className="text-gray-50 mb-4">
              Referral Available:{" "}
              <span
                className={
                  job.openForReferral ? "text-green-500" : "text-red-500"
                }
              >
                {job.openForReferral ? "Yes" : "No"}
              </span>
            </p>
            {!job.connected && (
              <button className="bg-white py-2 px-4 rounded-lg hover:bg-[#FFC107]">
                Connect
              </button>
            )}
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default JobPortal;
