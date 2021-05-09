import './FleetBanner2.css'
import upLogo from '../../../../assets/Photos/up-logo.png'
import nslLogo from '../../../../assets/Photos/nsl-logo.png'
import msiLogo from '../../../../assets/Photos/msi-logo.png'

const FleetBanner = () => {
    return (
        <div className="fleet">
            <div className="fleetBanner-container">

            </div>
            <div className="logos">
                <img src={upLogo} alt="sample"/>
                <img src={msiLogo} alt="sample"/>
                <img src={nslLogo} alt="sample"/>
            </div>


        </div>
    )
}

export default FleetBanner
