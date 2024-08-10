import React from 'react'


export const WelcomeTitle:React.FC= () =>{
    return(
        <div className="welcome-page__title" data-aos="fade-right" data-aos-duration="500">
        <h3>Find a job that suits <br /> your interest & skills.</h3>
        <div className="welcome-page__desc" data-aos="fade-right" data-aos-duration="1500">
            <p>Aliquam vitae turpis in diam convallis finibus in at risus. Nullam <br /> in scelerisque leo, eget sollicitudin velit bestibulum.</p>
        </div>
    </div>
    )
}