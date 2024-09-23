import React, { useState } from "react";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import "./Profilepage.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  // Non-editable data
  const navigate = useNavigate(); // Hook to navigate programmatically

  const profileData = {
    name: "Luffy",
    yearOfPassout: "2026",
    degree: "Bachelor of Science in Computer Science",
    college: "Silicon University",
    profilePic: "https://m.media-amazon.com/images/I/51rayl0HnRL._SY741_.jpg", // Placeholder for profile picture
  };

  // Editable data with state management
  const [editableData, setEditableData] = useState({
    about: "I am a software engineer with a passion for technology.",
    achievements: ["Won XYZ Hackathon", "Published 3 research papers"],
    experience: ["2 years at ABC Corp as a full-stack developer"],
    location: "Odisha, India",
    phoneNumber: "123-456-7890",
    interests: "Programming, Hiking, Chess, Anime, Football",
  });

  const [showDonations, setShowDonations] = useState(true);
  const donations = "Rs.10Lakh"; // Non-editable field

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [newAchievement, setNewAchievement] = useState("");

  // Editing state
  const [isEditing, setIsEditing] = useState(false);

  // Handle adding new achievement
  const addAchievement = () => {
    if (newAchievement.trim()) {
      setEditableData({
        ...editableData,
        achievements: [...editableData.achievements, newAchievement],
      });
      setNewAchievement("");
      setShowModal(false);
    }
  };
  const addExperience = () => {
    if (newExperience.trim()) {
      setEditableData({
        ...editableData,
        experiences: [...editableData.experiences, newExperience],
      });
      setNewExperience("");
      setShowModal(false);
    }
  };

  // Handle change for editable fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableData({ ...editableData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="flex justify-end mb-4">
        <button
          className="text-white bg-[#FF8C00] hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-300"
          onClick={() => navigate("/alumni")}
        >
          Home
        </button>
      </div>

      <h1 className="h1">Profile Page</h1>

      {/* Profile section */}
      <div className="profile-section">
        <div className="profile-pic-container">
          <img
            src={profileData.profilePic}
            alt="Profile Pic"
            className="profile-pic"
          />
          <button className="edit-pic-btn">
            <FaPencilAlt /> {/* Pencil icon for editing profile picture */}
          </button>
        </div>

        <div className="profile-info">
          <h2>{profileData.name}</h2>
          <p>
            <strong>Year of Passout:</strong> {profileData.yearOfPassout}
          </p>
          <p>
            <strong>Degree:</strong> {profileData.degree}
          </p>
          <p>
            <strong>College:</strong> {profileData.college}
          </p>
        </div>
      </div>

      {/* Editable sections with grey background inside labels */}
      <div className="editable-section">
        <form onSubmit={handleSubmit}>
          {/* About Section */}
          <div className="form-group">
            <label>About 📒</label>
            <div className="content-box">
              {isEditing ? (
                <textarea
                  name="about"
                  value={editableData.about}
                  onChange={handleChange}
                />
              ) : (
                <p>{editableData.about}</p>
              )}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="form-group">
            <label>Achievements 🏆</label>
            <div className="content-box">
              {editableData.achievements.map((achievement, index) => (
                <div key={index}>{achievement}</div>
              ))}
              {isEditing && (
                <button
                  type="button"
                  className="add-btn"
                  onClick={() => setShowModal(true)}
                >
                  <FaPlus /> Add Achievement{" "}
                  {/* Plus icon for adding new achievements */}
                </button>
              )}
            </div>
          </div>

          {/* Experience Section */}
          <div className="form-group">
            <label>Experience 🧑🏽‍💼</label>
            <div className="content-box">
              {editableData.experience.map((exp, index) => (
                <div key={index}>{exp}</div>
              ))}
              {isEditing && (
                <button
                  type="button"
                  className="add-btn"
                  onClick={() => {
                    setEditableData({
                      ...editableData,
                      experience: [...editableData.experience, ""],
                    });
                  }}
                >
                  <FaPlus /> Add Experience
                </button>
              )}
            </div>
          </div>

          {/* Location Section */}
          <div className="form-group">
            <label>Location 📍</label>
            <div className="content-box">
              {isEditing ? (
                <input
                  type="text"
                  name="location"
                  value={editableData.location}
                  onChange={handleChange}
                />
              ) : (
                <p>{editableData.location}</p>
              )}
            </div>
          </div>

          {/* Phone Number Section */}
          <div className="form-group">
            <label>Phone Number ☎️</label>
            <div className="content-box">
              {isEditing ? (
                <input
                  type="text"
                  name="phoneNumber"
                  value={editableData.phoneNumber}
                  onChange={handleChange}
                />
              ) : (
                <p>{editableData.phoneNumber}</p>
              )}
            </div>
          </div>

          {/* Interests Section */}
          <div className="form-group">
            <label>Interests 💡</label>
            <div className="content-box">
              {isEditing ? (
                <input
                  type="text"
                  name="interests"
                  value={editableData.interests}
                  onChange={handleChange}
                />
              ) : (
                <p>{editableData.interests}</p>
              )}
            </div>
          </div>

          {/* Total Donations */}
          <div className="form-group">
            <label>Total Donations 💵</label>
            <div className="content-box">
              <div className="donations-container">
                {showDonations ? <span>{donations}</span> : <span>Hidden</span>}
                <button
                  type="button"
                  className="toggle-btn"
                  onClick={() => setShowDonations(!showDonations)}
                >
                  {showDonations ? "Hide" : "Show"}
                </button>
              </div>
            </div>
          </div>

          {isEditing && (
            <button type="submit" className="update-btn">
              Save Profile
            </button>
          )}
        </form>
      </div>

      {/* Edit Profile Button */}
      <button
        className="edit-profile-btn"
        onClick={() => setIsEditing(!isEditing)}
      >
        {isEditing ? "Cancel Edit" : "Edit Profile"}
      </button>

      {/* Modal for adding achievement */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New Achievement</h2>
            <input
              type="text"
              value={newAchievement}
              onChange={(e) => setNewAchievement(e.target.value)}
              placeholder="Enter new achievement"
            />
            <div className="modal-actions">
              <button onClick={addAchievement} className="save-btn">
                Save
              </button>
              <button onClick={() => setShowModal(false)} className="close-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
