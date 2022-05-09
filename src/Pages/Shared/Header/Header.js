import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleLogout = () => {
        signOut(auth)
    }


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img style={{ width: "40px" }} src="https://images.vexels.com/media/users/3/152653/isolated/preview/3dfc4ac50eca195cc2b1a4fd8ac56e05-sport-motorcycle-icon.png" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#items" style={{ color: "#C4E538" }}>Items</Nav.Link>
                        <Nav.Link href="home#aboutUs" style={{ color: "#C4E538" }}>About Us</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/blogs" style={{ color: "#C4E538" }}>Blogs</Nav.Link>
                        {
                            user && <>
                                <Nav.Link as={Link} to="/myItems" style={{ color: "#C4E538" }}>My Items</Nav.Link>
                                <Nav.Link as={Link} to="/add" style={{ color: "#C4E538" }}>Add Items</Nav.Link>

                            </>
                        }
                        {
                            user ? <button style={{ color: "#C4E538" }} className='btn btn-link text-decoration-none ' onClick={handleLogout} >Log out</button>

                                :
                                <Nav.Link as={Link} to="/login" style={{ color: "#C4E538" }}>
                                    Login
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;