import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const LearnershipForm = () => {
  const { state } = useLocation();
  const job = state?.job;
  const [submitting, setSubmitting] = useState(false);


  const [form, setForm] = useState({
    surname: "",
    fullnames: "",
    gender: "",
    age: "",
    race: "",
    email: "",
    phoneNumber: "",
    password: "ytityuyi",
  });

  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (submitting) return;
  setSubmitting(true);

  const formData = new FormData();
  if (job?.id) {
    formData.append("generatePostApplicationId", job.id);
  }
  Object.entries(form).forEach(([key, value]) => {
    formData.append(key, value);
  });
  Array.from(files).forEach((file) => {
    formData.append("files", file);
  });

  try {
    const response = await fetch("https://b-t-backend.onrender.com/api/post/apply", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("✅ Application submitted successfully!");
    } else {
      const errText = await response.text();
      alert("❌ Failed to submit: " + errText);
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert("⚠️ An error occurred.");
  } finally {
    setSubmitting(false);
  }
};

  return (
    <div className="container py-5">
      <div className="mx-auto shadow-sm p-4 bg-white rounded" style={{ maxWidth: "600px" }}>
        <h2 className="text-danger mb-4">Learnership / Internship Application</h2>

        {job && (
          <div className="alert alert-secondary">
            <strong>Applying for:</strong> {job.title} &mdash; {job.location}
          </div>
        )}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-3">
            <label className="form-label">Surname</label>
            <input name="surname" className="form-control" value={form.surname} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Full Names</label>
            <input name="fullnames" className="form-control" value={form.fullnames} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label>
            <select name="gender" className="form-select" value={form.gender} onChange={handleChange} required>
              <option value="">Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Age</label>
              <input type="number" name="age" className="form-control" value={form.age} onChange={handleChange} required />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Race</label>
              <select name="race" className="form-select" value={form.race} onChange={handleChange} required>
                <option value="">Select...</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Coloured">Coloured</option>
                <option value="Indian">Indian</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" name="email" className="form-control" value={form.email} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input name="phoneNumber" className="form-control" value={form.phoneNumber} onChange={handleChange} required />
          </div>



          <div className="mb-4">
            <label className="form-label">Upload CV / Supporting Documents</label>
            <input type="file" multiple onChange={handleFileChange} className="form-control" />
          </div>

          <button type="submit" className="btn btn-danger w-100">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default LearnershipForm;
