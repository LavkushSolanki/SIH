// Donations.js
import React, { useState } from "react";
import { FaPlus, FaDonate } from "react-icons/fa";

function Donations() {
  const [donations, setDonations] = useState([
    { id: 1, donor: "John Doe", amount: 200, info: "Alumni 2010" },
    { id: 2, donor: "Jane Smith", amount: 150, info: "Alumni 2012" },
  ]);

  const [donationPosts, setDonationPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    amount: "",
    description: "",
  });

  // Handle input changes for creating new donation posts
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  // Add a new donation post
  const handleAddPost = () => {
    setDonationPosts([...donationPosts, { ...newPost, totalDonated: 0 }]);
    setNewPost({ title: "", amount: "", description: "" });
  };

  // Calculate total donations
  const totalDonations = donations.reduce((total, donation) => total + donation.amount, 0);

  return (
    <div className="p-4 flex flex-col lg:flex-row gap-6">
      {/* Section 1: Previous Donations */}
      <div className="lg:w-1/3 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Previous Donations</h2>
        {donations.length > 0 ? (
          <ul>
            {donations.map((donation) => (
              <li key={donation.id} className="mb-3 p-3 bg-gray-100 rounded-md shadow-sm">
                <h3 className="font-semibold">{donation.donor}</h3>
                <p>Amount: ${donation.amount}</p>
                <p>{donation.info}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No donations yet.</p>
        )}
      </div>

      {/* Section 2: Create Donation Post */}
      <div className="lg:w-1/3 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Create Donation Post</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newPost.title}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount Required"
            value={newPost.amount}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newPost.description}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleAddPost}
            className="bg-blue-500 text-white p-2 rounded flex items-center justify-center gap-2 hover:bg-blue-600"
          >
            <FaPlus />
            Create Post
          </button>
        </div>
      </div>

      {/* Section 3: Total Donations for Each Post */}
      <div className="lg:w-1/3 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Donation Posts</h2>
        {donationPosts.length > 0 ? (
          <ul>
            {donationPosts.map((post, index) => (
              <li key={index} className="mb-3 p-3 bg-gray-100 rounded-md shadow-sm">
                <h3 className="font-semibold">{post.title}</h3>
                <p>Amount Required: ${post.amount}</p>
                <p>{post.description}</p>
                <p>Total Donated: ${post.totalDonated}</p>
                <button className="mt-2 bg-green-500 text-white p-2 rounded flex items-center justify-center gap-2 hover:bg-green-600">
                  <FaDonate />
                  Donate
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No donation posts yet.</p>
        )}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Total Donations: ${totalDonations}</h3>
        </div>
      </div>
    </div>
  );
}

export default Donations;
