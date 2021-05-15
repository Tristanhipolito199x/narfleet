import './GalleryCarousel.css'
import Carousel from 'react-elastic-carousel';
import { Carousel1, Carousel2, Carousel3 } from './GalleryCarouselModel'

const GalleryCarousel = () => {

    const breakPoints = [
        { width: 1700, itemsToShow: 3.34}
      ];

    return (
        <div>
            <div className='gallery-container-1'>
                <div className="gallery-content-1">
                    <div className="title-green-1 Avenir-medium">PHOTOS FROM KASARINLAN</div>
                    <div className="title-green-2 Avenir-light">By Jue Lalas</div>
                    <div className="carousel-card-1">
                        <Carousel itemsToShow={3} pagination={false} showArrows={false} breakPoints={breakPoints}>
                        {Carousel1.map((item, index) =>{
                             return(
                                <div className="image-1">
                                    <img src={item.photo} alt="gallery-01"/>
                                    <div className="image__overlay-1">
                                        <div className="image__title-1 Avenir">{item.title}</div>
                                    </div>
                                </div>
                              )
                            })}  
                        </Carousel>
                    </div>
                </div>
                <div className="gallery-content-1">
                    <div className="title-green-1 Avenir-medium">PHILIPPINES RISE</div>
                    <div className="title-green-2 Avenir-light">By Jue Lalas</div>
                    <div className="carousel-card-1">
                        <Carousel itemsToShow={3} pagination={false} showArrows={false} breakPoints={breakPoints}>
                        {Carousel2.map((item, index) =>{
                             return(
                                <div className="image-1">
                                    <img src={item.photo} alt="gallery-01"/>
                                    <div className="image__overlay-1">
                                        <div className="image__title-1 Avenir">{item.title}</div>s
                                    </div>
                                </div>
                              )
                            })}  
                        </Carousel>
                    </div>
                </div>
                <div className="gallery-content-1">
                    <div className="title-green-1 Avenir-medium">WPS EXPEDITION</div>
                    <div className="title-green-2 Avenir-light">By Jue Lalas</div>
                    <div className="carousel-card-1">
                        <Carousel itemsToShow={3} pagination={false} showArrows={false} breakPoints={breakPoints}>
                        {Carousel3.map((item, index) =>{
                             return(
                                <div className="image-1">
                                    <img src={item.photo} alt="gallery-01"/>
                                    <div className="image__overlay-1">
                                        <div className="image__title-1 Avenir">{item.title}</div>
                                    </div>
                                </div>
                              )
                            })}  
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryCarousel
