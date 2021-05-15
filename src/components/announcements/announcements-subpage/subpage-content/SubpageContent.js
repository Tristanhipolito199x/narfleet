import { MdNavigateBefore } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { SubpageData } from './SubpageContentModel'
import AboutSearch from '../../../about/about-search/AboutSearch'
import './SubpageContent.css'

const SubpageContent = () => {

    const breakPoints = [
        { width: 1700, itemsToShow: 3.23}
    ];

    return (
        <div>
            <div style={{display: 'grid', justifyContent: 'center'}}>
            <AboutSearch />
                <div className="announcement-subpage-container" style={{color:'white'}}>
                    {SubpageData.map((item, index) =>{
                        return(
                        <div className="announcement-subpage-card">
                            <div className="announcement-subpage-label Avenir-medium"> {item.label} </div>
                            <NavLink exact to="/announcements" className="announcement-arrow-back">
                                    <MdNavigateBefore className="next-icon"/>    
                            </NavLink>
                            <div className="announcement-subpage-title">
                                <p className="Avenir-medium">{item.title}</p>
                                <p className="Avenir-medium">{item.susbtitle}</p>
                            </div>
                            <div className="announcement-subpage-image">
                                <img src={item.img} alt='hopo wps' />
                            </div>
                            <div className="announcement-subpage-white-container-bg Avenir-light">
                                <p> {item.whiteBgText} </p>
                            </div>
                            <div className="announcement-text-content Avenir-light">
                                <p>{item.p1}</p>
                                <p>{item.p2}</p>
                                <p>{item.p3}</p>
                                <p>{item.p4}</p>
                                <p>{item.p5}</p>
                                <p>{item.p6}</p>
                                <p>{item.p7}</p>
                                <p>{item.p8}</p>
                            </div>
                        </div>
                      )
                    })} 
                </div>
            </div>
        </div>
    )
}

export default SubpageContent
