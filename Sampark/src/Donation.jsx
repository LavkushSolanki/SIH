import React from "react";

const Donation = () => {
  const donationPosts = [
    {
      id: 1,
      instituteName: "XYZ College of Engineering",
      eventDescription:
        "Support our annual alumni fund to build a new library.",
      eventDate: "25th September 2024",
      goalAmount: "$50,000",
      amountRaised: "$20,000",
    },
    {
      id: 2,
      instituteName: "XYZ College of Engineering",
      eventDescription:
        "Help us in organizing the national level tech symposium for students.",
      eventDate: "15th October 2024",
      goalAmount: "$30,000",
      amountRaised: "$10,500",
    },
  ];

  return (
    <div className="bg-[#F5F5F5] mt-28 p-6 min-h-screen">
      <h1 className="text-[#333333] text-4xl font-bold mb-6 text-center">
        Donation Requests
      </h1>
      <div className="max-w-7xl mx-auto space-y-8">
        {donationPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-700 text-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
          >
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">{post.instituteName}</h2>
              <p className="text-lg mt-2">{post.eventDescription}</p>
              <p className="mt-4">
                <span className="font-bold">Event Date:</span> {post.eventDate}
              </p>
              <p>
                <span className="font-bold">Goal Amount:</span>{" "}
                {post.goalAmount}
              </p>
              <p>
                <span className="font-bold">Amount Raised:</span>{" "}
                {post.amountRaised}
              </p>
            </div>
            <div>
              <button className="bg-white text-[#333333] py-3 px-6 rounded-md text-lg font-semibold hover:bg-[#FFC107] transition-all duration-300">
                Donate Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Spacer to avoid footer overlap */}
      <div className="h-16"></div>
    </div>
  );
};

export default Donation;
