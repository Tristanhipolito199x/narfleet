import './StationsContent.css'
import map from '../../../assets/Photos/station/map.png'
import { StationsCard } from './StationContentModel'

const AboutContent2 = () => {
    return (
        
        <div className="station-container">
            <div className=" line"></div>
            <img src={map} alt="map"className="map"/>
            <div className='aboutCard'>
             {StationsCard.map((item, index) =>{
                 return(
                <div className='aboutContent-card2-1'>
                    <div className="padding-about-card2">
                        <p className="Avenir-medium"><ul> <li>{item.title}</li></ul>
                            <span className="Avenir-light">{item.subtitle}</span>
                        </p>
                        <p className="Avenir-light">{item.paragraph}</p>
                    </div>
                </div>
                 )
                })}
            </div>
        </div>
    )
}

export default AboutContent2



/*
import './StationsContent.css'
const StationsContent = () => {
    return (
        <div className="stationscontent-cotainer">
            
        </div>
    )
}

export default StationsContent*/
