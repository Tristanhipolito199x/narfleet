import './ProgramsContent.css'
import { ProgramsCard } from './ProgramsContentModel'
import AboutSearch from '../../about/about-search/AboutSearch'

const ProgramsContent = () => {
     return (
        <div>
            <div className='programs-container'>
                <div className="program-search">
                    <AboutSearch />
                </div>
                {ProgramsCard.map((item, index) =>{
                     return(
                        <div key={index} className="programs-content">
                            <div className="image-container">
                                <img src={item.photo} alt='hopo wps' />
                            </div>
                            <div className="program-details-container">
                                <div className="program-details">
                                    <p className="green-text">
                                        <span className="program-title Avenir-medium">{item.title} </span> 
                                        <span className="program-subtitles Avenir-medium">{item.subTitle}</span>
                                    </p>
                                </div>
                                <p className="title-content-programs">{item.context}</p>
                                <p className="learn-more Avenir-light">LEARN MORE</p>
                            </div>
                        </div>
                    )
                })}    
            </div>
        </div>
    )
}

export default ProgramsContent
