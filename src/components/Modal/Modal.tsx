import React, { useState } from 'react';
import './modal.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (jobData: {
    jobTitle: string;
    location: string;
    jobType: string;
    salary: string;
    description: string;
  }) => void;
}

export const Modal = ({ isOpen, onClose, onSubmit }: ModalProps) => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('remote');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!jobTitle) newErrors.jobTitle = 'Job title is required';
    if (!location) newErrors.location = 'Location is required';
    if (!salary) newErrors.salary = 'Salary is required';
    if (!description) newErrors.description = 'Job description is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ jobTitle, location, jobType, salary, description });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Post a Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="job-title">Job Title:</label>
            <input
              type="text"
              id="job-title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Enter job title"
            />
            {errors.jobTitle && <p className="error">{errors.jobTitle}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
            />
            {errors.location && <p className="error">{errors.location}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="job-type">Job Type:</label>
            <select
              id="job-type"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="remote">Remote</option>
              <option value="offline">Offline</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="salary">Salary:</label>
            <input
              type="text"
              id="salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Enter salary"
            />
            {errors.salary && <p className="error">{errors.salary}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="description">Job Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter job description"
            ></textarea>
            {errors.description && <p className="error">{errors.description}</p>}
          </div>
          <button type="submit" className="submit-button">Post Job</button>
        </form>
      </div>
    </div>
  );
};
