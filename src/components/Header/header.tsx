import { useState } from 'react';
import { Link } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import './header.scss';

export const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const handleLanguageSelect = (language: string) => {
        setSelectedLanguage(language);
        setIsDropdownOpen(false);
    };

    return (
        <div className="container-header" data-aos="fade-down">
            <nav className="header">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/job">Find Job</Link></li>
                    <li><Link to="/employers">Employers</Link></li>
                    <li><Link to="/candidates">Candidates</Link></li>
                    <li><Link to="/pricingPlans">Pricing plans</Link></li>
                    <li><Link to="/Support">Customer Supports</Link></li>
                </ul>
                <ul>
                    <li className='phone'> <LocalPhoneIcon></LocalPhoneIcon><p>+1-202-555-0178</p></li>
                    <li 
                        className="dropdown" 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <img 
                            src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg" 
                            alt="flag" 
                            width={24}
                            height={16}
                            className="flag-icon" 
                        />
                        {selectedLanguage}
                        <span className="dropdown-arrow">▼</span>
                        {isDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li onClick={() => handleLanguageSelect('Russia')}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSBSsV2up86rvStJSG-tDxoYiHfyl-1DVY5A&s" 
                                    width={24}
                                    height={16}
                                    alt="Russian Flag" />
                                    Russia
                                </li>
                                <li onClick={() => handleLanguageSelect('Spanish')}>
                                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/800px-Flag_of_Spain.svg.png" 
                                    width={24}
                                    height={16}
                                    alt="Spanish Flag" />
                                    Spanish
                                </li>
                                <li onClick={() => handleLanguageSelect('French')}>
                                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png" 
                                    width={24}
                                    height={16}
                                    alt="French Flag" />
                                    French
                                </li>
                                {/* Добавьте больше языков по мере необходимости */}
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
};
