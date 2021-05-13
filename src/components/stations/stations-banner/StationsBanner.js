import upLogo from '../../../assets/Photos/up-logo.png'
import nslLogo from '../../../assets/Photos/nsl-logo.png'
import msiLogo from '../../../assets/Photos/msi-logo.png'
import Search from '../../home/homeContent/search/Search'

const StationsBanner = () => {
    return (
        <div className="fleet">
            <div className="logos">
                <img src={upLogo} alt="sample"/>
                <img src={msiLogo} alt="sample"/>
                <img src={nslLogo} alt="sample"/>
            </div>

            <div className="title-search">
                <p className="fleet-title Optima-B">Stations</p>
                <div className="search-fleet">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default StationsBanner
