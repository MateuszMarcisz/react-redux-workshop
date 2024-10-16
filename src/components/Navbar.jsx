import {Navbar as BootstrapNavbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Navbar = () => {
    return (
        <BootstrapNavbar bg="light" expand="lg" className="w-100">
            <BootstrapNavbar.Brand href="/">Movie Library</BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Search</Nav.Link>
                    <Nav.Link href="/to-watch">To Watch</Nav.Link>
                    <Nav.Link href="/watched">Watched</Nav.Link>
                </Nav>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    );
};

export default Navbar;
