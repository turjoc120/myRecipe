import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import RecipeCard from '../../RecipeCard/RecipeCard';
import Spinner from 'react-bootstrap/spinner'

const HomePage = () => {
    const [myRecipes, setRecepies] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/allRecipes').then(res => setRecepies(res.data))
    }, [myRecipes])

    // loader / spinner 
    if (myRecipes.length === 0) {
        return (
            <Container style={{ height: "100vh" }} className='d-flex align-items-center justify-content-center'>
                <Spinner animation="border" variant="primary" />
            </Container>
        )
    }

    return (
        <Container>
            <h2 className='mt-3 mb-4'>All Your <span className='text-info'>Recipe</span></h2>
            <Row xs={1} md={2} lg={3} className='g-4'>
                {
                    myRecipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)
                }
            </Row>
        </Container>
    );
};

export default HomePage;