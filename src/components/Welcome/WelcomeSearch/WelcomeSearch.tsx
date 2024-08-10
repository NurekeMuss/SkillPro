import SearchIcon from '@mui/icons-material/Search'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react';

export const WelcomeSearch:React.FC = () =>{
    return(
    <div className="welcome-page__search" data-aos="fade-up" data-aos-duration="1000">
        <div className="search-container">
                <div className="search">
                    <SearchIcon/><input type="text" placeholder='Job Title,Keyword...'/>
                </div>
                <div className='stick'></div>
                <div className="location">
                    <LocationOnIcon/><input type="text" placeholder='Your location'/>
                </div>
        </div>
            <div className="welcome-button">
                <button className='active'><p>Find A Job</p></button>
            </div>
    </div>
    )
}