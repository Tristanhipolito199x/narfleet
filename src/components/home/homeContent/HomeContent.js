import './homeContent.css'
import HomeContentSide from './home-content-side/HomeContentSide'
import HomeContentTeam from './home-content-team/HomeContentTeam'
import HomeContentNews from './home-content-news/HomeContentNews'
import HomeContentRVPhotos from './home-content-RVphotos/HomeContentRVphotos'
import Search from './search/Search'


const HomeContent = () => {
    return (
        <div>
            <div className="homecontent-center-box">
                <div className="homeContent-container">
                    <div className="row-content">
                        <Search />
                        <div>
                            <HomeContentRVPhotos/>
                            <HomeContentNews />
                        </div>
                    </div>
                    <HomeContentSide />
                </div>
            </div>
            
            <HomeContentTeam/>
        </div>
    )
}

export default HomeContent
