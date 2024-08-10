import React, { useEffect, useState } from 'react';
import { Header } from '../Header/header';
import { SearchForm } from '../Search/SearchForm';
import './jobPage.scss';

interface Job {
  id: number;
  jobTitle: string;
  location: string;
  jobType: string;
  salary: string;
  description: string;
}

export const JobPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('http://localhost:5000/jobs');
        const data = await response.json();
        
        setTimeout(() => {
          setJobs(data);
          setLoading(false);
        }, 2000); 
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="job-page ">
      <SearchForm />
      <div className="all-job">
  
      <div className="job-page-content container">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="job-list">
            {jobs.length > 0 ? (
              jobs.map(job => (
                <div key={job.id} className="job-card">
                  <h3>{job.jobTitle}</h3>
                  <p>{job.location}</p>
                  <p>{job.jobType}</p>
                  <p>{job.salary}</p>
                  <p>{job.description}</p>
                </div>
              ))
            ) : (
              <p>No jobs available</p>
            )}
          </div>
        )}
      </div>
      </div>
    </div>
  );
};
