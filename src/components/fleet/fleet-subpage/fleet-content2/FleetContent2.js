import './FleetContent2.css'
import ocean from '../../../../assets/Photos/fleet/background-01.png'
import ship from '../../../../assets/Photos/fleet/kasarinlan-01.png'
import { NavLink } from 'react-router-dom'
import { MdNavigateBefore } from 'react-icons/md'
// import { useState } from 'react'


const FleetContent = () => {
    // const fleet = false;
    return (
        <div>
            <div className="fleet-content3">
                <div className="fleet-context6">
                    <div className="blue-line6">
                        <div className="circle2-1"></div>
                        <div className="circle2-2"></div>
                        <div className="circle2-3"></div>
                    </div>
                    <div className="Avenir-light second-p6">
                        <p><span className="Avenir-medium">
                            <NavLink exact to="/the-fleet" style={{color: '#5A7634'}}>
                                <MdNavigateBefore className="next-icon"/>    
                            </NavLink>
                             RV PANATA
                         </span>
                       </p>
                        <p>Manila Bay</p>
                    </div>
                    <div className="Avenir-light second2-p6">
                        <p>SPECIFICATIONS</p>
                        <p>Price: 30M</p>
                        <p>Dimensions: 28 meters</p>
                        <p>Contructions: MSI</p>
                        <p>Building Year: 2020</p>
                        <p>Engine: Volvo Penta D6-350</p>
                    </div>
                </div>
                <div className="fleet-container3">
                    <div className="fleet-img3">
                        <img src={ocean} alt="Ocean" style={{top:'20px'}}/>
                        <img src={ship} alt="Kasarinlan" />
                        <div className="overlay3"></div>
                        <div className="top-stroke3"></div>
                        <div className="bottom-stroke3"></div>
                        <div className="left-stroke3"></div>
                        <div className="right-stroke3"></div>
                        <div className="top-left-stroke3"></div>
                        <div className="top-right-stroke3"></div>
                        <div className="bottom-left-stroke3"></div>
                        <div className="bottom-right-stroke3"></div>
                    </div>
                </div>
                <div className="fleet-context5">
                    <div className="blue-line5">
                        <div className="circle-1"></div>
                        <div className="circle-2"></div>
                        <div className="circle-3"></div>
                        <div className="circle-4"></div>
                        <div className="circle-5"></div>
                    </div>
                    <div className="Avenir-light second-p5">
                        <p><span className="Avenir-medium">Manila Bay </span> | June 2019</p>
                        <p>Seismic Survey</p>
                    </div>
                    <div className="Avenir-light second-p5">
                        <p><span className="Avenir-medium">Verde Island Passage</span> | July 2019</p>
                        <p>Oceanographic and plastics research</p>
                    </div>
                    <div className="Avenir-light second-p5">
                        <p><span className="Avenir-medium">Sorsogon Bay</span> | August 23-28, 2019</p>
                        <p>Oceanographic and HABs research</p>
                    </div>
                    <div className="Avenir-light second-p5">
                        <p><span className="Avenir-medium">Boracay Island</span> | Aug 29 - Sept 2, 2019</p>
                    </div>
                    <div className="Avenir-light second-p5">
                        <p><span>Tubbataha Reefs</span> | October 2019</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FleetContent
