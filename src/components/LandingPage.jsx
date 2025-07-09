import React from 'react';
import { GraduationCap, Briefcase, ArrowRight } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-vh-100 bg-light bg-gradient d-flex align-items-center">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-dark mb-3">
            Start Your Career Journey
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Whether you're a student seeking valuable experience or a professional ready for your next opportunity, 
            we're here to connect you with the perfect role.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Students */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="card h-100 border-0 shadow-lg rounded-4 mx-auto">
              <div className="card-header bg-danger text-white p-4 rounded-top-4">
                <GraduationCap size={48} className="mb-3" />
                <h5 className="card-title fw-bold">Students & Learners</h5>
                <p className="text-light small mb-0">
                  Apply for internships, learnerships, and entry-level opportunities
                </p>
              </div>
              <div className="card-body">
                <ul className="list-unstyled text-muted mb-4">
                  {['Internship programs', 'Learnership opportunities', 'Graduate trainee positions', 'Skills development programs'].map((item, idx) => (
                    <li className="d-flex align-items-center mb-2" key={idx}>
                      <span className="me-2 bg-danger rounded-circle" style={{ width: '8px', height: '8px' }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate("/jobs?type=Internship")}
                  className="btn btn-danger w-100 d-flex align-items-center justify-content-center gap-2 rounded-pill"
                >
                  <span>Apply as Student</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Professionals */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="card h-100 border-0 shadow-lg rounded-4 mx-auto">
              <div className="card-header bg-dark text-white p-4 rounded-top-4">
                <Briefcase size={48} className="mb-3" />
                <h5 className="card-title fw-bold">Professionals</h5>
                <p className="text-light small mb-0">
                  Explore career opportunities and advance your professional journey
                </p>
              </div>
              <div className="card-body">
                <ul className="list-unstyled text-muted mb-4">
                  {['Full-time positions', 'Senior roles', 'Management opportunities', 'Contract positions'].map((item, idx) => (
                    <li className="d-flex align-items-center mb-2" key={idx}>
                      <span className="me-2 bg-dark rounded-circle" style={{ width: '8px', height: '8px' }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate("/jobs?type=Job")}
                  className="btn btn-dark w-100 d-flex align-items-center justify-content-center gap-2 rounded-pill"
                >
                  <span>Apply as Professional</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
