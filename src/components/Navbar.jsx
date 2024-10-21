import {Navbar as BootstrapNavbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"; // Import Bootstrap CSS

const Navbar = () => {
    return (
        <BootstrapNavbar bg="light" expand="lg" className="w-100">
            <BootstrapNavbar.Brand href="/">Movie Library</BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav"/>
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
                {/* Using Link for navigation is important so the page doesn't reload!*/}
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Search</Nav.Link>
                    <Nav.Link as={Link} to="/to-watch">To Watch</Nav.Link>
                    <Nav.Link as={Link} to="/watched">Watched</Nav.Link>
                </Nav>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    );
};

export default Navbar;
