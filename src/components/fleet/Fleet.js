import FleetExplore from "./fleet-explore/FleetExplore"
import FleetBanner from "./fleet-banner/FleetBanner"
import FleetContent from "./fleet-content/FleetContent"

const Fleet = () => {
    return (
        <div>
            <FleetBanner />
            <FleetContent />
            <FleetExplore />    
        </div>
    )
}

export default Fleet
