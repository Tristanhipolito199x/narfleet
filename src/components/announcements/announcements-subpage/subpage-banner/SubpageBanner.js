import upLogo from '../../../../assets/Photos/up-logo.png'
import nslLogo from '../../../../assets/Photos/nsl-logo.png'
import msiLogo from '../../../../assets/Photos/msi-logo.png'

const SubpageBanner = () => {
    return (
        <div className="announcements-banner">
            <div className="about-logos">
                <img src={upLogo} alt="sample"/>    
                <img src={msiLogo} alt="sample"/>
                <img src={nslLogo} alt="sample"/>
            </div>
            <p className="about-title Optima-B">ANNOUNCEMENTS & NEWS</p>
        </div>
    )
}

export default SubpageBanner
