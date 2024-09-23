import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Head from "./Head";
import Donation from "./Donation";
import Footer from "./Footer";
import Home from "./Home";
import Profile from "./Profile";
import Job from "./Job";
import Chat from "./Chat";
import Network from "./Network";
import Dashboard from "./Dashboard/Dashboard";
import AddPost from "./Dashboard/AddPost";
import Donations from "./Dashboard/Donations";
import AlumniDirectory from "./Dashboard/AlumniDir";
import TrackAlumni from "./Dashboard/TrackAlumni";
import TopAchievers from "./Dashboard/TopAchievers";
import Notifications from "./Dashboard/Notifications";
import Login from "./Login";
import Student from "./Student";
import Register from "./Register";
import Otp from "./Otp";

export default function App() {
  const [section, setSection] = useState("Home");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        <Route
          path="/alumni"
          element={
            <div className="bg-white">
              <Head />
              {section === "Home" ? (
                <Home />
              ) : section === "Donation" ? (
                <Donation />
              ) : section === "Job" ? (
                <Job />
              ) : (
                <Network />
              )}
              <Footer section={section} setSection={setSection} />
            </div>
          }
        ></Route>
        <Route
          path="/student"
          element={
            <div className="bg-white">
              <Student />
              <Home />
            </div>
          }
        ></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/college" element={<Dashboard />}>
          <Route path="addpost" element={<AddPost />}></Route>
          <Route path="donation" element={<Donations />} />
          <Route path="alumnidir" element={<AlumniDirectory />} />
          <Route path="trackalumni" element={<TrackAlumni />} />
          <Route path="topachievers" element={<TopAchievers />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
