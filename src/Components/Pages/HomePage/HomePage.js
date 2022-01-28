import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import RecipeCard from '../../RecipeCard/RecipeCard';

const HomePage = () => {
    const [myRecipes, setRecepies] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/allRecipes').then(res => setRecepies(res.data))
    }, [myRecipes])

    return (
        <Container>
            <h1 className='my-3'>All Your Recipe</h1>
            <Row xs={1} md={2} lg={3} className='g-3'>
                {
                    myRecipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)
                }
            </Row>
        </Container>
    );
};

export default HomePage;