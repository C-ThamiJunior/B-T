import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Briefcase, MapPin, DollarSign, Calendar, ArrowRight } from 'lucide-react';

const JobPostingsPage = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // Initialize useLocation

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const jobType = params.get('type'); // Get the 'type' query parameter

    axios.get("https://b-t-backend.onrender.com/api/post/visible")
      .then((res) => {
        let filteredPosts = res.data;
        if (jobType) {
          // Filter job posts based on the 'type' parameter (case-insensitive)
          filteredPosts = res.data.filter(job => job.postType && job.postType.toLowerCase() === jobType.toLowerCase());
        }
        setJobPosts(filteredPosts);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setError("Failed to load job postings.");
        setLoading(false);
      });
  }, [location.search]); // Re-run effect when the URL search parameters change

  const handleApplyClick = (job) => {
    navigate("/learnership-form", { state: { job } });
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-bold text-danger">Explore Opportunities</h2>

      {loading && <p>Loading job postings...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && jobPosts.length === 0 && (
        <p className="text-muted">No job postings available.</p>
      )}

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {!loading && jobPosts.map((job) => (
          <div className="col" key={job.id}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-danger fw-bold mb-2">
                  <Briefcase size={18} className="me-2 text-secondary" />
                  {job.title}
                </h5>

                <p className="card-text text-muted" style={{ fontSize: '0.95rem' }}>
                  {job.description
                  ? (job.description.length > 140
                      ? job.description.slice(0, 140) + "..."
                      : job.description)
                  : <span className="text-muted">No description</span>}

                </p>

                <ul className="list-unstyled small text-muted mb-3">
                  <li><MapPin size={14} className="me-2 text-danger" /> {job.location || 'N/A'}</li>
                  <li>
                    <Calendar size={14} className="me-2 text-danger" />
                    Closing: {job.closingDate
                      ? new Date(job.closingDate).toLocaleDateString('en-ZA', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })
                      : 'N/A'}
                  </li>
                </ul>

                <div className="mt-auto text-end">
                  <button className="btn btn-outline-danger btn-sm" onClick={() => handleApplyClick(job)}>
                    Apply Now <ArrowRight size={14} className="ms-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPostingsPage;