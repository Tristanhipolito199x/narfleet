
import upLogo from '../../../assets/Photos/up-logo.png'
import nslLogo from '../../../assets/Photos/nsl-logo.png'
import msiLogo from '../../../assets/Photos/msi-logo.png'
import './ProgramsBanner.css'

const AboutBanner = () => {
    return (
        <div className="programs-banner">      
            <div className="programs-logos">
                <img src={upLogo} alt="sample"/>
                <img src={msiLogo} alt="sample"/>
                <img src={nslLogo} alt="sample"/>
            </div>  
            <p className="about-title Optima-B">Narfleet Programs</p>
            <p className="Avenir-light about-bannerText">In response to the need to improve capacity for ocean research and assist the government in science-based management of our marine resources, the National Security Council granted the request OF UP MSI to establish and develop the country’s National Academic Research Fleet (NARFleet). The NARFleet will be a group of vessels dedicated to Marine Scientific Research (MSR) initiatives of the country.</p>
        </div>
    )
}

export default AboutBanner
