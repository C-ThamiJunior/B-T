import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Send } from 'lucide-react'; // Import Lucide icon
import { FormField } from './FormField'; // Import the new FormField component
import { FileUpload } from './FileUpload'; // Import the new FileUpload component

const LearnershipForm = () => {
  const { state } = useLocation();
  const job = state?.job;

  const [formData, setFormData] = useState({
    surname: "",
    fullnames: "",
    gender: "",
    age: "",
    race: "",
    email: "",
    phoneNumber: "",
    password: "ytityuyi", // Consider if this should be part of the form or handled differently
  });

  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (selectedFiles) => {
    setFiles(Array.from(selectedFiles)); // Ensure files is an array-like object
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.surname.trim()) newErrors.surname = 'Surname is required.';
    if (!formData.fullnames.trim()) newErrors.fullnames = 'Full names are required.';
    if (!formData.gender) newErrors.gender = 'Gender is required.';
    if (!formData.age || formData.age < 16 || formData.age > 65) newErrors.age = 'Age must be between 16 and 65.';
    if (!formData.race) newErrors.race = 'Race is required.';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\s/g, ''))) {
      newErrors.phoneNumber = 'Phone number must be 10 digits.';
    }

    if (files.length === 0) newErrors.files = 'At least one document is required (CV/Supporting Documents).';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log("Validation failed", errors);
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    if (job?.id) {
      formDataToSend.append("generatePostApplicationId", job.id);
    }
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    Array.from(files).forEach((file) => {
      formDataToSend.append("files", file);
    });

    try {
      const response = await fetch("http://localhost:8081/api/post/apply", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("✅ Application submitted successfully!");
        // Optionally reset form or redirect
      } else {
        const errText = await response.text();
        alert("❌ Failed to submit: " + errText);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("⚠️ An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D2042D' }}>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-2">Learnership / Internship Application</h2>
            <p className="text-gray-600">Apply for internships, learnerships, and development programs</p>
          </div>

          {job && (
            <div className="bg-gray-100 p-4 rounded-xl text-center text-gray-700">
              <strong className="text-lg">Applying for:</strong> <span className="font-semibold">{job.title}</span> &mdash; <span className="text-gray-600">{job.location}</span>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <FormField label="Surname" error={errors.surname} required>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2042D] focus:border-transparent text-gray-900"
                placeholder="Enter your surname"
              />
            </FormField>

            <FormField label="Full Names" error={errors.fullnames} required>
              <input
                type="text"
                name="fullnames"
                value={formData.fullnames}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2042D] focus:border-transparent text-gray-900"
                placeholder="Enter your full names"
              />
            </FormField>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FormField label="Gender" error={errors.gender} required>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2042D] focus:border-transparent text-gray-900"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </FormField>

            <FormField label="Age" error={errors.age} required>
              <input
                type="number"
                name="age"
                min="16"
                max="65"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2042D] focus:border-transparent text-gray-900"
              />
            </FormField>
          </div>

          <FormField label="Race" error={errors.race} required>
            <select
              name="race"
              value={formData.race}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2042D] focus:border-transparent text-gray-900"
            >
              <option value="">Select Race</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Coloured">Coloured</option>
              <option value="Indian">Indian</option>
              <option value="Other">Other</option>
            </select>
          </FormField>

          <FormField label="Email Address" error={errors.email} required>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2042D] focus:border-transparent text-gray-900"
              placeholder="your.email@example.com"
            />
          </FormField>

          <FormField label="Phone Number" error={errors.phoneNumber} required>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D2042D] focus:border-transparent text-gray-900"
              placeholder="0123456789"
            />
          </FormField>

          <FormField label="Upload CV / Supporting Documents" error={errors.files} required>
            <FileUpload
              files={files}
              onFileSelect={handleFileChange}
              error={errors.files}
            />
          </FormField>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#D2042D] text-white py-4 px-6 rounded-xl font-semibold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Submit Application</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LearnershipForm;