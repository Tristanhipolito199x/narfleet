import './GalleryCarousel.css'
import Carousel from 'react-elastic-carousel';
import { useState } from 'react'
import a1 from '../../../assets/Photos/gallery/2nd-carousel/1.jpg'
import a2 from '../../../assets/Photos/gallery/2nd-carousel/2.jpeg'
import a3 from '../../../assets/Photos/gallery/2nd-carousel/3.jpeg'
import a4 from '../../../assets/Photos/gallery/2nd-carousel/4.jpg'
import a5 from '../../../assets/Photos/gallery/2nd-carousel/5.jpg'
import b1 from '../../../assets/Photos/gallery/3rd-carousel/1.jpg'
import b2 from '../../../assets/Photos/gallery/3rd-carousel/2.jpg'
import b3 from '../../../assets/Photos/gallery/3rd-carousel/3.jpg'
import b4 from '../../../assets/Photos/gallery/3rd-carousel/4.jpg'
import b5 from '../../../assets/Photos/gallery/3rd-carousel/5.jpg'
import c1 from '../../../assets/Photos/gallery/4th-carousel/1.png'
import c2 from '../../../assets/Photos/gallery/4th-carousel/2.png'
import c3 from '../../../assets/Photos/gallery/4th-carousel/3.png'
import c4 from '../../../assets/Photos/gallery/4th-carousel/4.png'
import c5 from '../../../assets/Photos/gallery/4th-carousel/5.png'

const GalleryCarousel = () => {

    const breakPoints = [
        { width: 1700, itemsToShow: 3.34}
      ];

    const [FirstGallery] = useState([
        {title: 'Swimming with Bruce by Oliver Corvera', photo: a5,},
        {title: 'Swimming with Bruce by Oliver Corvera', photo: a4,},
        {title: 'Swimming with Bruce by Oliver Corvera', photo: a1,},
        {title: 'Swimming with Bruce by Oliver Corvera', photo: a2,},
        {title: 'Swimming with Bruce by Oliver Corvera', photo: a3,},
    ])

    const [SecondGallery] = useState([
        {title: 'Swimming with Bruce by Oliver Corvera', photo: b1,},
        {title: 'Swimming with Bruce by Oliver Corvera', photo: b2,},
        {title: 'Swimming with Bruce by Oliver Corvera', photo: b3,},
        {title: 'Swimming with Bruce by Oliver Corvera', photo: b4,},
        {title: 'Swimming with Bruce by Oliver Corvera', photo: b5,},
    ])
    
    const [ThirdGallery] = useState([
        {title: 'Swimming with Bruce by Oliver Corvera', photo: c1,},
        {title: 'Swimming with Bruce by Oliver Corvera', photo: c2,},
        {title: 'Swimming with Bruce by Oliver Corvera', photo: c3,},
        {title: 'Swimming with Bruce by Oliver Corvera', photo: c4,},
        {title: 'Swimming with Bruce by Oliver Corvera', photo: c5,},
    ])

    return (
        <div>
            <div className='gallery-container-1'>
                <div className="gallery-content-1">
                    <div className="title-green-1 Avenir-medium">PHOTOS FROM KASARINLAN</div>
                    <div className="title-green-2 Avenir-light">By Jue Lalas</div>
                    <div className="carousel-card-1">
                        <Carousel itemsToShow={3} pagination={false} showArrows={false} breakPoints={breakPoints}>
                            {FirstGallery.map( (progCont, i) => (
                                <div className="image-1">
                                    <img src={progCont.photo} alt="gallery-01"/>
                                    <div className="image__overlay-1">
                                        <div className="image__title-1 Avenir">{progCont.title}</div>
                                    </div>
                                </div>
                            ))}    
                        </Carousel>
                    </div>
                </div>
                <div className="gallery-content-1">
                    <div className="title-green-1 Avenir-medium">PHILIPPINES RISE</div>
                    <div className="title-green-2 Avenir-light">By Jue Lalas</div>
                    <div className="carousel-card-1">
                        <Carousel itemsToShow={3} pagination={false} showArrows={false} breakPoints={breakPoints}>
                            {SecondGallery.map( (progCont, i) => (
                                <div className="image-1">
                                    <img src={progCont.photo} alt="gallery-01"/>
                                    <div className="image__overlay-1">
                                        <div className="image__title-1 Avenir">{progCont.title}</div>
                                    </div>
                                </div>
                            ))}    
                        </Carousel>
                    </div>
                </div>
                <div className="gallery-content-1">
                    <div className="title-green-1 Avenir-medium">WPS EXPEDITION</div>
                    <div className="title-green-2 Avenir-light">By Jue Lalas</div>
                    <div className="carousel-card-1">
                        <Carousel itemsToShow={3} pagination={false} showArrows={false} breakPoints={breakPoints}>
                            {ThirdGallery.map( (progCont, i) => (
                                <div className="image-1">
                                    <img src={progCont.photo} alt="gallery-01"/>
                                    <div className="image__overlay-1">
                                        <div className="image__title-1 Avenir">{progCont.title}</div>
                                    </div>
                                </div>
                            ))}    
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryCarousel
