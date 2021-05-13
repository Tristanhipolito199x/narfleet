import GalleryBanner from "./gallery-banner/GalleryBanner"
import GalleryCarousel from './gallery-carousel/GalleryCarousel'
import GalleryExplore from './gallery-explore/GalleryExplorer'




const Gallery = () => {

    return (
        <div>
            <GalleryBanner />
            <GalleryCarousel />  
            <GalleryExplore />
        </div>
    )
}

export default Gallery
