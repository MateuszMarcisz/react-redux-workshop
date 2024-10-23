import {Navbar as BootstrapNavbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {faFilm, faMagnifyingGlass, faStarHalfStroke, faVideo} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Navbar.css';

const Navbar = () => {
    return (
        <BootstrapNavbar bg="light" expand="lg" className="h-100 w-100 px-2 border rounded-2 border-dark-subtle">
            <BootstrapNavbar.Brand href="/">
                <FontAwesomeIcon icon={faFilm} className='me-1'/>Movie Library
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav"/>
            <BootstrapNavbar.Collapse id="basic-navbar-nav" className="h-100">
                {/* Using Link for navigation is important so the page doesn't reload!*/}
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/" className="nav-link">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='me-1'/> Search
                    </Nav.Link>
                    <Nav.Link as={Link} to="/to-watch" className="nav-link">
                        <FontAwesomeIcon icon={faVideo} className='me-1'/>To Watch
                    </Nav.Link>
                    <Nav.Link as={Link} to="/watched" className="nav-link">
                       <FontAwesomeIcon icon={faStarHalfStroke} className='me-1'/> Watched
                    </Nav.Link>
                </Nav>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    );
};

export default Navbar;
