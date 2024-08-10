import React from 'react';

interface WelcomeStataProps {
    imageSrc: string;
    title: string;
    description: string;
    variant?: 'light' | 'dark';
}

export const WelcomeStata: React.FC<WelcomeStataProps> = ({ imageSrc, title, description, variant = 'light' }) => {
    return (
        <div className="all-card">
            <div className={`card ${variant}`}>
                <div className="card-img">
                    <img src={imageSrc} alt={title} />
                </div>
                <div className="card-text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
        
    );
};
