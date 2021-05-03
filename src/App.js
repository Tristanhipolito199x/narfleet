import Navbar from './components/navbar/Navbar'
import Home from './components/home/homepage/home'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Fleet from './components/fleet/Fleet';
import About from './components/about/About';
import Programs from './components/programs/Programs';
import Stations from './components/stations/Stations';

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

            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/programs">
              <Programs />
            </Route>

            <Route exact path="/stations">
              <Stations />
            </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  )
}


export default App;
