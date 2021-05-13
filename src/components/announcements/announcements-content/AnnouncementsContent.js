import { AnnouncementsCard } from './AnnoncementContentModel'
import AboutSearch from '../../about/about-search/AboutSearch'

const AnnouncementsContent = () => {
     return (
        <div>
        <div className='programs-container-2'>
            <div className="program-search">
            <AboutSearch />
            </div>
            {AnnouncementsCard.map( (item, i) => (
                <div key={`some-content${i}`} className="programs-content-2">
                     <div className={item.background}>{item.status}</div>
                    <div className="left-image-2">
                        <img src={item.photo} alt='hopo wps' />
                    </div>

                    <div className="programs-context-2">
                        <div className="green-color">
                            <p className="green-color">
                                <span className="programs-title-2">{item.title}
                                </span> <span className="title-sub2">{item.subTitle}</span>
                            </p>
                        </div>

                        <p className="title-content-programs-2">{item.context}</p>

                        <p className="learn-more-2 Avenir-light">LEARN MORE</p>
                    </div>
                </div>
            ))}    
        </div>
    </div>
    )
}

export default AnnouncementsContent
