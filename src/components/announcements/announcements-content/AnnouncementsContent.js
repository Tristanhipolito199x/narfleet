    import { AnnouncementsCard } from './AnnoncementContentModel'
    import './AnnouncementContent.css'
    import AboutSearch from '../../about/about-search/AboutSearch'

    import { NavLink } from 'react-router-dom'

    const AboutContent = () => {

        return (
            <div>
                <div style={{display: 'grid', justifyContent: 'center'}}>
                <AboutSearch />
                    <div className="about-container-1">
                        {AnnouncementsCard.map((item, index) =>{
                            return(
                        
                                <div key={index} className="about-card-1">
                                    <div className={item.labelClass}>{item.label}</div>
                                    <NavLink exact to={item.url} className="announcement-link">
                                    <div className="announcement-image">
                                        <img src={item.image} alt='hopo wps' />
                                    </div>
                            
                                    <div className="about-card-text">
                                        <p className="Avenir-medium"> {item.title} </p>
                                        <p className="Avenir-light"> {item.p1} </p>
                                        <p className="Avenir-light"> {item.p2} </p>
                                        <p className="Avenir-light"> READ MORE</p>
                                    </div>
                                    </NavLink>
                                </div>
                        
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

    export default AboutContent
