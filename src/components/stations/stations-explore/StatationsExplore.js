import navi from '../../../assets/Photos/about/02-navi.png'
import { MdNavigateNext } from 'react-icons/md'

const StationExplore = () => {
    return (
        <div>
            <div className="explore-next">
                <div className="explore-box">
                    <img src={navi} alt="navi"/>
                    <div className="bg-cont">
                        <span className="bg-img"></span>
                    </div>
                    <div>
                        <span className="Optima-B navi-title"><span style={{color: '#5A7634'}}>EXPLORE NEXT <MdNavigateNext className="next-icon"/></span> GALLERY</span>
                        <br/>
                        <p className="explore-next-content Avenir-light">PROTECT WPS was an all-Filipino scientific expedition launched on April 22 with goal of exploring and conducting “biological and oceanographic research activities within Kalayaan Island Group-West Philippine Sea (KIG-WPS),” Department of Environment and Natural Resources (DENR)’s Agos ng Buhay said. DENR Agos added that the expedition aimed to generate baseline data in order to further understand the changes occurring in the country’s marine ecosystems.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StationExplore
