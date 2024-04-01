
import { Nav } from "react-bootstrap";
import styles from "./globalNavBar.module.scss";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { frontendRoutes } from "../../api/frontendRoutes";


const GlobalNavBar = () => {


    return (
        <Navbar expand="md" className={`bg-body-tertiary ${styles.globalNavBar}`}>
            <Container>
                <Navbar.Brand href="#"><img src="/svgs/logo.svg" alt="Logo" width={40} height={60} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="activeLink" href={frontendRoutes.careers}>Careers</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">GitHub</Nav.Link>
                        <Nav.Link href="#">LinkedIn</Nav.Link>
                        <Nav.Link href="#">GitLab</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default GlobalNavBar