import './AboutContent.css'
import Carousel from 'react-elastic-carousel';
import gallery1 from '../../../assets/Photos/about/gallery-01.jpg'
import gallery2 from '../../../assets/Photos/about/gallery-02.jpg'
import gallery3 from '../../../assets/Photos/about/gallery-03.jpg'
import gallery4 from '../../../assets/Photos/about/gallery-04.jpg'
import gallery5 from '../../../assets/Photos/about/gallery-05.jpg'
import navi from '../../../assets/Photos/about/02-navi.png'
import { MdNavigateNext } from 'react-icons/md'



const AboutContent = () => {
    return (
        <div>
            <div style={{display: 'grid', justifyContent: 'center'}}>
                <div className='aboutContent-card-1'>
                    <div className="padding-about-card">
                        <p className="Avenir-medium">Home port and Berthing</p>
                        <p className="Avenir-light">The ships to be acquired by UP MSI through the NSC grant will be deployed in different parts of the country. To do this, the UP MSI will collaborate with the universities strategically located in various areas of the country to host and co-manage some of the vessels. Specifically, the 35-m fisheries vessel WHICH will be deployed in East Philippine/Visayan seas WILL BE under the stewardship of Visayas (UPV). The other 35-m fisheries vessel which will focus on research in Sulu Sea/Southern Seas WILL BE under the stewardship of Mindanao State University – Iligan Institute of Technology (MSU-IIT) and UP. </p>
                        <p className="Avenir-light">The 50-m vessel for high seas will be dedicated to the WPS and Northeast Philippine expeditions and will be co-hosted by Bicol University (BU) with berths in Manila and Sorsogon depending on season. The smaller catamaran (12 m) is dedicated for coastal work and will be berthed in Manila and at our Mindoro marine laboratory in Puerto Galera. The co-host universities will contribute to the costs of berthing, docking, pier, and will be asked to request for additional plantilla positions for the ship’s crew and staff, as necessary.</p>
                    </div>
                </div>

                <div className='aboutContent-card-2'>
                    <div className="padding-about-card">
                        <p className="Avenir-medium">NARFleet TWG and Advisory Board</p>
                        <p className="Avenir-light">Since the NARFleet will be deployed throughout the country, the NARFleet TWG and Advisory Board will include representatives from the partner universities (UPV, MSU-IIT, BU) and the NARFleet-Coordination and Management Office (NARFleet-CMO), with UPMSI as the lead agency. The NARFleet TWG-AB will be responsible in ensuring proper coordination, usage, scheduling, maintenance, and deployment of the vessels. Decisions will be made by the lead agency based on these recommendations with the assistance of the NARFleet-CMO.</p>
                    </div>
                </div>
                
                <div className='aboutContent-card-3'>
                    <div className="padding-about-card">
                        <p className="Avenir-medium">Funding</p>
                        <p className="Avenir-light">In addition to the allotted funds for the procurement of the vessels (PhP120M), equipment (PhP90M) and corresponding MOOE (PhP130M), the activities and maintenance and operations of the fleet for the next 3 years have also been embedded on the requested funds for 2021-2023 (HOPE WPS and PRIMER). Also, following the models used in other academic fleets (i.e., USA UNOLS), the vessels will require a minimum ship-time fee for both academic and non-academic users, which will ensure funds for other needed costs. Definite costing will be determined once the ships have been acquired and assessed for consumption, logistical needs, manpower, etc.</p>
                    </div>
                </div>

                <div className='aboutContent-card-4'>
                    <div className="padding-about-card">
                        <p className="Avenir-medium">Coordination and Management Office (CMO)</p>
                        <p className="Avenir-light">Part of the MOOE (PhP120M) funds released to MSI will be dedicated to put up a “NARFleet Coordinating and Management Office” (NARFleet-CMO, PhP13M), which will mainly function as the admin department and will assist in the establishment, coordination, and development of protocols, guidelines and framework of NARFleet. The NARFleet-CMO will also be responsible in coordinating for the annual planning and scheduling of the ships’ activities all around the country, and in managing funds and expenses. It will also serve as the marketing arm of NARFleet to get non-academic users to use the vessels and contribute to the cost of maintenance and operations. The NARFleet-CMO will also closely work with the other coordinating offices of other agencies under the CONMIRA umbrella.</p>
                    </div>
                </div>
            </div>

            <div style={{display: 'grid', justifyContent: 'center'}}>
                <div className="carousel-card">
                    <Carousel itemsToShow={3} pagination={false}>
                        <img src={gallery1} alt="gallery-01"/>
                        <img src={gallery2} alt="gallery-02"/>
                        <img src={gallery3} alt="gallery-03"/>
                        <img src={gallery4} alt="gallery-04"/>
                        <img src={gallery5} alt="gallery-05"/>
                    </Carousel>
                </div>
            </div>

            <div className="explore-next">
                <img src={navi} alt="navi"/>
                <div className="bg-cont">
                    <span className="bg-img"></span>
                </div>
                <div>
                    <span className="Optima-B navi-title"><span style={{color: '#5A7634'}}>EXPLORE NEXT <MdNavigateNext className="next-icon"/></span> THE FLEET</span>
                    <br/>
                    <p className="explore-next-content Avenir-light">PROTECT WPS was an all-Filipino scientific expedition launched on April 22 with goal of exploring and conducting “biological and oceanographic research activities within Kalayaan Island Group-West Philippine Sea (KIG-WPS),” Department of Environment and Natural Resources (DENR)’s Agos ng Buhay said. DENR Agos added that the expedition aimed to generate baseline data in order to further understand the changes occurring in the country’s marine ecosystems.</p>
                    
                </div>

            </div>
        </div>
    )
}

export default AboutContent
