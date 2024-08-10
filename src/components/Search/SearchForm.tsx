import { useState, useEffect } from 'react';
import './search.scss';
import search from '../../images/search.png';
import '../../App.css';
import SearchIcon from '@mui/icons-material/Search';
import { Modal } from '../Modal/Modal';

export const SearchForm = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('India');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobs, setJobs] = useState<any[]>([]);

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    setIsDropdownOpen(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  const handlePostJob = (jobData: {
    jobTitle: string;
    location: string;
    jobType: string;
    salary: string;
    description: string;
  }) => {
    fetch('http://localhost:5000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobData),
    })
      .then(response => response.json())
      .then(data => {
        setJobs([...jobs, data]);
        closeModal();
      })
      .catch(error => console.error('Error posting job:', error));
  };

  return (
    <div className="container">
      <div className="search-panel" data-aos="zoom-in" data-aos-offset="300"
     data-aos-easing="ease-in-sine"data-aos-duration="1000">
        <div className="search-panel_title">
          <img src={search} width={40} height={40} alt="img" />
          <h1>Jobpilot</h1>
        </div>
        <div className="search-panel_form">
          <ul>
            <li
              className="dropdown"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                alt="flag"
                width={24}
                height={16}
                className="flag-icon"
              />
              {selectedRegion}
              <span className="dropdown-arrow">▼</span>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li onClick={() => handleRegionSelect('Russia')}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSBSsV2up86rvStJSG-tDxoYiHfyl-1DVY5A&s"
                      width={24}
                      height={16}
                      alt="Russian Flag"
                    />
                    Russia
                  </li>
                  <li onClick={() => handleRegionSelect('Spanish')}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/800px-Flag_of_Spain.svg.png"
                      width={24}
                      height={16}
                      alt="Spanish Flag"
                    />
                    Spanish
                  </li>
                  <li onClick={() => handleRegionSelect('French')}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png"
                      width={24}
                      height={16}
                      alt="French Flag"
                    />
                    French
                  </li>
                </ul>
              )}
            </li>
          </ul>
          <div className="stick"></div>
          <SearchIcon />
          <input type="text" placeholder="Job title, keyword, company" />
        </div>
      </div>
      <div className="buttons" data-aos="zoom-in-left" data-aos-offset="300"
     data-aos-easing="ease-in-sine"data-aos-duration="1000">
        <button className="passive">
          <p>Sign In</p>
        </button>
        <button className="active" onClick={openModal}>
          <p>Post A Jobs</p>
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} onSubmit={handlePostJob} />
    </div>
  );
};
