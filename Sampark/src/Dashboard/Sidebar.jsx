import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddPost from './AddPost';
import Donations from './Donations';
import AlumniDir from './AlumniDir';
import TrackAlumni from './TrackAlumni';
import TopAchievers from './TopAchievers';
import Notifications from './Notifications'

function Sidebar() {
  // State for mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#FFC107] text-black transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative lg:inset-0`}>
        <nav className="p-6 h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-8">Silicon University</h2>
          <ul className="space-y-4 flex-grow">
            <li>
              <Link to="/college/addpost" className="block py-2 px-4 rounded hover:bg-amber-100">POSTS</Link>
            </li>
            <li>
              <Link to="/college/donation" className="block py-2 px-4 rounded hover:bg-amber-100">DONATIONS</Link>
            </li>
            <li>
              <Link to="/college/alumnidir" className="block py-2 px-4 rounded hover:bg-amber-100">ALUMNI DIRECTORY</Link>
            </li>
            <li>
              <Link to="/college/trackalumni" className="block py-2 px-4 rounded hover:bg-amber-100">TRACK ALUMNI</Link>
            </li>
            <li>
              <Link to="/college/topachievers" className="block py-2 px-4 rounded hover:bg-amber-100">TOP ACHIEVERS</Link>
            </li>
            <li>
              <Link to="/college/notifications" className="block py-2 px-4 rounded hover:bg-amber-100">NOTIFICATIONS</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-40">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 bg-gray-800 rounded-md focus:outline-none focus:ring">
          {/* Hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Content Area */}
      {/* <div className="flex-grow ml-0 lg:ml-0 p-8 overflow-y-auto">
        <Routes>
          <Route path="/college/addpost" element={<AddPost />} />
          <Route path="/college/donation" element={<Donations />} />
          <Route path="/college/alumnidir" element={<AlumniDir />} />
          <Route path="/college/trackalumni" element={<TrackAlumni />} />
          <Route path="/college/topachievers" element={<TopAchievers />} />
          <Route path="/college/notifications" element={<Notifications />} />
        </Routes>
      </div> */}
    </div>
  );
}

export default Sidebar;
