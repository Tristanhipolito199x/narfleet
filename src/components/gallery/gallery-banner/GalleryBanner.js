import upLogo from '../../../assets/Photos/up-logo.png'
import nslLogo from '../../../assets/Photos/nsl-logo.png'
import msiLogo from '../../../assets/Photos/msi-logo.png'
import Search from '../../home/homeContent/search/Search'

const GalleryBanner = () => {
    return (
        <div className="fleet">
            <div className="logos">
                <img src={upLogo} alt="sample"/>
                <img src={msiLogo} alt="sample"/>
                <img src={nslLogo} alt="sample"/>
            </div>

            <div className="title-search">
                <p className="fleet-title Optima-B">Featured Photos</p>
                <div className="search-fleet" style={{right:'-220px'}}>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default GalleryBanner
