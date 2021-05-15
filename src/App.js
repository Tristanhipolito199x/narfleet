import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Home from './components/home/homepage/home'
import Footer from './components/footer/Footer'
import Fleet from './components/fleet/Fleet';
import FleetSubPage from './components/fleet/fleet-subpage/Fleet-Subpage';
import About from './components/about/About';
import Programs from './components/programs/Programs';
import Stations from './components/stations/Stations';
import Gallery from './components/gallery/Gallery';
import Announcements from './components/announcements/Announcements';
import AnnouncementsSubpage from './components/announcements/announcements-subpage/AnnouncementSubpage';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route exact path="/the-fleet">
              <Fleet />
            </Route>
            
            <Route exact path="/the-fleet/fleet-subpage">
              <FleetSubPage />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/programs">
              <Programs />
            </Route>

            <Route exact path="/stations">
              <Stations />
            </Route>

            <Route exact path="/gallery">
              <Gallery />
            </Route>

            <Route exact path="/announcements">
              <Announcements />
            </Route>
            
            <Route exact path="/announcements/subpage">
              <AnnouncementsSubpage />
            </Route>

          </Switch>
        <Footer />
      </div>
    </Router>
  )
}


export default App;
