import AboutBanner from "./about-banner/AboutBanner"
import AboutContent from "./about-content/AboutContent"
import AboutSearch from "./about-search/AboutSearch"
import AboutExplore from "./about-explore/AboutExplore"

const About = () => {
    return (
        <div>
            <AboutBanner />
            <AboutSearch />
            <AboutContent />
            <AboutExplore />
        </div>
    )
}

export default About
