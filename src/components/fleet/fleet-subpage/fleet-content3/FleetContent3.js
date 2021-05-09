import './FleetContent3.css'
import ocean from '../../../../assets/Photos/fleet/background-01.png'
import ship from '../../../../assets/Photos/fleet/kasarinlan-01.png'
import { NavLink } from 'react-router-dom'
// import { useState } from 'react'

const FleetContent3 = () => {
    // const fleet = false;
    return (
        <div>
            <div className="fleet-content4">
                <div className="fleet-container4">
                    <div className="fleet-img4">
                        <NavLink exact to="/the-fleet/fleet-subpage"  activeClassName="active">
                            <img src={ocean} alt="Ocean" style={{top:'20px'}}/>
                            <img src={ship} alt="Kasarinlan" />
                            <div className="overlay4"></div>
                            <div className="top-stroke4"></div>
                            <div className="bottom-stroke4"></div>
                            <div className="left-stroke4"></div>
                            <div className="right-stroke4"></div>
                            <div className="top-left-stroke4"></div>
                            <div className="top-right-stroke4"></div>
                            <div className="bottom-left-stroke4"></div>
                            <div className="bottom-right-stroke4"></div>
                        </NavLink>
                        <div className="text-overlay4">TRACK</div>  
                    </div>
                </div>
                <div className="fleet-container4">
                    <div className="fleet-img4">
                        <NavLink exact to="/the-fleet/fleet-subpage"  activeClassName="active">
                            <img src={ocean} alt="Ocean" style={{top:'20px'}}/>
                            <img src={ship} alt="Kasarinlan" />
                            <div className="overlay4"></div>
                            <div className="top-stroke4"></div>
                            <div className="bottom-stroke4"></div>
                            <div className="left-stroke4"></div>
                            <div className="right-stroke4"></div>
                            <div className="top-left-stroke4"></div>
                            <div className="top-right-stroke4"></div>
                            <div className="bottom-left-stroke4"></div>
                            <div className="bottom-right-stroke4"></div>
                        </NavLink>
                        <div className="text-overlay4">TRACK</div>  
                    </div>
                </div> 
                <div className="fleet-container4">
                    <div className="fleet-img4">
                        <NavLink exact to="/the-fleet/fleet-subpage"  activeClassName="active">
                            <img src={ocean} alt="Ocean" style={{top:'20px'}}/>
                            <img src={ship} alt="Kasarinlan" />
                            <div className="overlay4"></div>
                            <div className="top-stroke4"></div>
                            <div className="bottom-stroke4"></div>
                            <div className="left-stroke4"></div>
                            <div className="right-stroke4"></div>
                            <div className="top-left-stroke4"></div>
                            <div className="top-right-stroke4"></div>
                            <div className="bottom-left-stroke4"></div>
                            <div className="bottom-right-stroke4"></div>
                        </NavLink>
                        <div className="text-overlay4">TRACK</div>  
                    </div>
                </div>               
            </div>
            <div className="fleet-card4">
                <div className="fleet-context4">
                    <p className="Avenir-black">RV KASARINLAN</p>
                    <p className="Avenir-light">Manila Bay</p>
                </div>
                <div className="fleet-context4">
                    <p className="Avenir-black">RV KASARINLAN</p>
                    <p className="Avenir-light">Manila Bay</p>
                </div>
                <div className="fleet-context4">
                    <p className="Avenir-black">RV KASARINLAN</p>
                    <p className="Avenir-light">Manila Bay</p>
                </div>
            </div>
            <div className="fleet-marg"></div>
        </div>
    )
}

export default FleetContent3
