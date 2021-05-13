import AnnouncementsExplore from "./announcements-explore/AnnoncemetnsExplore"
import AnnouncementsBanner from "./announcements-banner/AnnouncementsBanner"
import AnnouncementsContent from "./announcements-content/AnnouncementsContent"

const Programs = () => {
    return (
        <div>
            <AnnouncementsBanner />
            <AnnouncementsContent />
            <AnnouncementsExplore />
        </div>
    )
}

export default Programs
