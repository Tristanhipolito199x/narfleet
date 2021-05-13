import GalleryBanner from "./gallery-banner/GalleryBanner"
import ExploreNext4 from './explore-next4/ExploreNext4'
import CarouselGallery from './carousel/Carousel'
import { useState } from 'react'


const Gallery = () => {

    return (
        <div>
            <GalleryBanner />
            <CarouselGallery />  
            <ExploreNext4 />
        </div>
    )
}

export default Gallery
