
import './HomeContentRVphotos.css'
import panata from '../../../../assets/Photos/icon-01-panata.png'
import kalayaan from '../../../../assets/Photos/icon-02-kalayaan.png'
import mandaragat from '../../../../assets/Photos/icon-03-mandaragat.png'

const HomeContentRVphotos = () => {
    return (
        <div className="RVphotos-container">
            <div className="img-container">
                <div className="img-overflow">
                    <img src={panata} alt="RV panata" />
                </div>
                <p className="Avenir-medium img-subcontent">RV PANATA</p>
                <p className="Avenir-light">Manila Bay</p>
            </div>
            
            <div className="img-container">
                <div className="img-overflow">
                    <img src={kalayaan} alt="RV kalayaan" />
                </div>
                <p className="Avenir-medium img-subcontent">RV KALAYAAN</p>
                <p className="Avenir-light">Kalayaan Islands</p>
            </div>
            
            <div className="img-container">
                <div className="img-overflow">
                    <img src={mandaragat} alt="RV mandaragat" />
                </div>
                <p className="Avenir-medium img-subcontent">RV MANDARAGAT</p>
                <p className="Avenir-light">West Philippine Sea</p>
            </div>

        </div>
    )
}

export default HomeContentRVphotos
