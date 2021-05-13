import './HomeContentSide.css'
import gallery1 from '../../../../assets/Photos/gallery-01.jpeg'
import gallery2 from '../../../../assets/Photos/gallery-02.jpeg'
import gallery3 from '../../../../assets/Photos/gallery-03.jpeg'
import gallery4 from '../../../../assets/Photos/gallery-04.jpeg'

const HomeContentSide = () => {
    return (
        <div className='side-content'>
            <div className='qoute-container'>
                <p className="qoute-content">“ This is a big leap for Filipinos, for the appreciation of Science. ”</p>
                <div className="qoute-author">
                    <p className="Avenir-light">- Dr. Deo Florence Onda</p>
                    <p className="Avenir-light">Deputy Director of Research, The UP MSI</p>
                </div>
            </div>

            <div className="gallery-container">
                <div className="gallery-content">
                    <div className="image">
                        <img className="image__img radius-5" src={gallery1} alt="Manilay Bay" />
                        <div className="image__overlay image__overlay--primary">
                            <div className="image__title Avenir">RV Kasarinlan at Manila Bay</div>
                        </div>
                    </div>

                    <div className="image">
                        <img className="image__img radius-5" src={gallery2} alt="Seagull Says Hello" />
                        <div className="image__overlay image__overlay--primary">
                            <div className="image__title Avenir">Mr. Seagull says hello </div>
                        </div>
                    </div>

                    <div className="image">
                        <img className="image__img radius-5" src={gallery3} alt="Research Associate Oliver" />
                        <div className="image__overlay image__overlay--primary">
                            <div className="image__title Avenir">Research Associate Oliver</div>
                        </div>
                    </div>

                    <div className="image">
                        <img className="image__img radius-5" src={gallery4} alt="RV Kasarinlan at Bolinao" />
                        <div className="image__overlay image__overlay--primary">
                            <div className="image__title Avenir">RV Kasarinlan at Bolinao</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeContentSide
