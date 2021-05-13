import './HomeBanner.css'
import upLogo from '../../../assets/Photos/up-logo.png'
import nslLogo from '../../../assets/Photos/nsl-logo.png'
import msiLogo from '../../../assets/Photos/msi-logo.png'

const HomeBanner = () => {
    return (
        <div className="banner-container">
            <div className="logos">
                <img src={upLogo} alt="sample"/>
                <img src={msiLogo} alt="sample"/>
                <img src={nslLogo} alt="sample"/>
            </div>

            <p className="title Optima-B">National Academic Research Fleet</p>
            <p className="subtitle Avenir-oblique">Charting New Waters</p>
        </div>
    )
}

export default HomeBanner
