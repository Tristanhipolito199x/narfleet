import './AboutContent.css'
import { AboutCard, AboutCarousel } from './AboutContentModel'
import Carousel from 'react-elastic-carousel';

const AboutContent = () => {

    const breakPoints = [
        { width: 1700, itemsToShow: 3.23}
      ];

    return (
        <div>
            <div style={{display: 'grid', justifyContent: 'center'}}>
                <div className="about-container">
                    {AboutCard.map((item, index) =>{
                        return(
                        <div key={index} className="about-card">
                            {item.title}
                            {item.p1}
                            {item.p2}
                        </div>
                        )
                     })}
                </div>
            </div>

            <div className="carousel-container">
                <div className="carousel-card" >
                    <Carousel itemsToShow={3} pagination={false} breakPoints={breakPoints}>
                        {AboutCarousel.map((item, index) =>{
                            return(<img src={item.src} alt={item.alt}/>)
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default AboutContent
