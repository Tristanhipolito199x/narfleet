import './FleetContent2.css'
import ocean from '../../../../assets/Photos/fleet/background-01.png'
import ship from '../../../../assets/Photos/fleet/kasarinlan-01.png'
import { NavLink } from 'react-router-dom'
// import { useState } from 'react'

const FleetContent = () => {
    // const fleet = false;
    return (
        <div>
            <div className="fleet-content3">
               <div className="fleet-context3">
                    <p className="Avenir-black">RV KASARINLAN</p>
                    <p className="Avenir-light">Manila Bay</p>
                    <div className="blue-line3">
                        <div className="circle-top3"></div>
                        <div className="circle-mid3"></div>
                        <div className="circle-bottom3"></div>
                    </div>

                    <div className="Avenir-light second-p3">
                        <p className="Avenir-medium">SPECIFICATIONS</p>
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
                <div className="fleet-context3">
                    <p className="Avenir-black">RV KASARINLAN</p>
                    <p className="Avenir-light">Manila Bay</p>
                    <div className="Avenir-light second-p3">
                        <p className="Avenir-medium">SPECIFICATIONS</p>
                        <p>Price: 30M</p>
                        <p>Dimensions: 28 meters</p>
                        <p>Contructions: MSI</p>
                        <p>Building Year: 2020</p>
                        <p>Engine: Volvo Penta D6-350</p>
                    </div>
                    
                    <div className="blue-line3">
                        <div className="circle-top3"></div>
                        <div className="circle-mid23"></div>
                        <div className="circle-bottom3"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FleetContent
