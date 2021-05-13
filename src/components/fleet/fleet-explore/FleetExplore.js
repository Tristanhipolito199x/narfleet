import './FleetExplore.css'
import navi from '../../../assets/Photos/fleet/navi-01.png'
import { MdNavigateNext } from 'react-icons/md'

const FleetExplore = () => {
    return (
        <div>
            <div className="explore-next2">
                <div className="explore-box2">
                    <img src={navi} alt="navi"/>
                    <div className="bg-cont2">
                        <span className="bg-img2"></span>
                    </div>
                    <div>
                        <span className="Optima-B navi-title2"><span style={{color: '#5A7634'}}>EXPLORE NEXT <MdNavigateNext className="next-icon2"/></span>PROGRAMS</span>
                        <br/>
                        <p className="explore-next-content2 Avenir-light">PROTECT WPS was an all-Filipino scientific expedition launched on April 22 with goal of exploring and conducting “biological and oceanographic research activities within Kalayaan Island Group-West Philippine Sea (KIG-WPS),” Department of Environment and Natural Resources (DENR)’s Agos ng Buhay said. DENR Agos added that the expedition aimed to generate baseline data in order to further understand the changes occurring in the country’s marine ecosystems.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FleetExplore