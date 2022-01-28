import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <header>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/" ><img width="50" className='mb-3' src="https://image.flaticon.com/icons/png/512/1116/1116852.png" alt="" /> <span className='fw-bolder fs-4'>YourRecipe</span></Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/add-recipe'>Add Recipe</Nav.Link>
                        <Button variant="info" onClick={() => window.location.reload(false)} className='rounded-pill'>Refresh</Button>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default HeaderNav;