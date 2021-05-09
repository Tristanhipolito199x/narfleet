import ocean from '../../../../assets/Photos/03-home-backdrop-ocean.png'
import sirDeo from '../../../../assets/Photos/sir-deo.png'
import sirDeo2 from '../../../../assets/Photos/shadow-sir-deo.png'
import sirDeo3 from '../../../../assets/Photos/soft-light.png'

const NarfleetTeam = () => {
    return (
        <div>
            <div className="team-container">
                <div className="ocean">
                    <img src={ocean} alt="backdrop ocean" />
                </div>
                <div className="team-content">
                    <div className="green-container">
                        <div className="green-line"></div>
                    </div>
                    <p className="Optima-B">RV PANATA CREW</p>

                    <div className="team-images-box">
                        <div className="team-images">
                            <img src={sirDeo} alt="Sir Deo" />
                            <img src={sirDeo2} alt="Sir Deo" />
                            <img src={sirDeo2} alt="Sir Deo" />
                        </div>
                    </div>

                    <div className="team-softlight">
                        <img className="deo" src={sirDeo3} alt="Sir Deo" />
                    </div>

                    <div className="team-title">
                        <span className="Avenir-black">Dr. Deo Florence Onda</span>
                        <span className="Avenir-light" >Captain</span>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default NarfleetTeam
