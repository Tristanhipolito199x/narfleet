import StationsBanner from "./stations-banner/StationsBanner"
import StationsContent from "./stations-content/StationsContent"
import StationExplore from "./stations-explore/StatationsExplore"

const Stations = () => {
    return (
        <div>
            <StationsBanner />
            <StationsContent />
            <StationExplore />
        </div>
    )
}

export default Stations
