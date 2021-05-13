import './Navbar.css';
import { NavLink } from 'react-router-dom'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import { Nav } from '../../../node_modules/react-bootstrap'

const Navbar = () => {
    return (
        <div className="nav">
            <div className="btn-nav Avenir">
                <NavLink className="nav-text1" exact to="/" style={{ textDecoration: 'none', color: 'white'}} activeClassName="active">
                    <p>NARFLEET HOME</p>
                </NavLink>

                <NavLink className="nav-text2" exact to="/about" style={{ textDecoration: 'none',}} activeClassName="active">
                    <p>ABOUT</p>
                </NavLink>

                <NavLink className="nav-text3" exact to="/the-fleet" style={{ textDecoration: 'none' }} activeClassName="active">
                    <p>THE FLEET</p>
                </NavLink>
                
                <NavLink className="nav-text4" exact to="/programs" style={{ textDecoration: 'none' }} activeClassName="active">
                    <p>PROGRAMS</p>
                </NavLink>

                <NavLink className="nav-text5" exact to="/stations" style={{ textDecoration: 'none' }} activeClassName="active">
                    <p>STATIONS</p>
                </NavLink>
                <NavLink className="nav-text6" exact to="/gallery" style={{ textDecoration: 'none' }} activeClassName="active">
                    <p>GALLERY</p>
                </NavLink>
                <NavLink className="nav-text7" exact to="/announcements" style={{ textDecoration: 'none' }} activeClassName="active">
                    <p>ANNOUNCEMENTS</p>
                </NavLink>
                <p className="nav-text8">CONTACT</p>
            </div>

            {/* <Nav className="Avenir nav">
                <Nav.Item>
                    <Nav.Link className="white-font Avenir-black">NARFLEET HOME</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link className="white-font">ABOUT</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link className="white-font">THE FLEET</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link className="white-font">PROGRAMS</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link className="white-font">STATIONS</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link className="white-font">GALLERY</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link className="white-font">ANNOUNCEMENTS</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                    <Nav.Link className="white-font">CONTACT</Nav.Link>
                </Nav.Item>
            </Nav> */}
        </div>

    )
}

export default Navbar
