import '../../App.css'
import './welcome.scss'
import welcome from '../../images/welcome.png'
import { WelcomeTitle } from './WelcomeTitle/welcomeTitle';
import { WelcomeSearch } from './WelcomeSearch/WelcomeSearch';
import { WelcomeText } from './WelcomeText/WelcomeText';
import { WelcomeStata } from './Stata/Stata';
import liveJobIcon from '../../images/Icon.png'
import icon2 from '../../images/Icon2.png'
import icon3 from '../../images/Icon3.png'
export const Welcome=()=> {
    return(
        <div className="main-container">
        
            <div className='container-welcome' >
                <div className="welcome-page">
                    <WelcomeTitle/>
                    <WelcomeSearch/>
                    <WelcomeText/>
                <div className="statistic">
                    <WelcomeStata 
                            imageSrc={liveJobIcon}
                            title="1,75,324"
                            description="Live Job"
                            variant='light'
                        />
                    <WelcomeStata 
                            imageSrc={icon2}
                            title="97,354"
                            description="Companies"
                            variant='dark'
                        />
                    <WelcomeStata 
                            imageSrc={icon3}
                            title="38,47,154"
                            description="Candidates"
                            variant='light'
                        />
                    <WelcomeStata 
                            imageSrc={liveJobIcon}
                            title="7,532"
                            description="New Jobs"
                            variant='dark'
                        />
                    </div>
                </div>

                <img src={welcome} alt="" data-aos="fade-left" data-aos-duration="1000"/>
            </div>
        
        </div>
    )
}
