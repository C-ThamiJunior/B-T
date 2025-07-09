import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import LearnershipForm from "./components/LearnershipForm";
import JobPostingsPage from "./components/JobPostingsPage";
import { LandingPage } from "./components/LandingPage";

// Wrapper to use useLocation outside Router
const AppWrapper = () => {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/learnership-form" element={<LearnershipForm />} />
        <Route path="/jobs" element={<JobPostingsPage/>} />
        <Route path="/internship" element={<JobPostingsPage/>} />
        <Route path="/apply" element={<LandingPage />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

export default App;
