import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const { recipeId } = useParams()
    const [recipeDetails, setRecipeDetails] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:5000/recipe/${recipeId}`).then(res => setRecipeDetails(res.data))
    }, [])

    if (!recipeDetails) {
        return (
            <Container style={{ height: "100vh" }} className='d-flex align-items-center justify-content-center'>
                <Spinner animation="border" variant="primary" />
            </Container>
        )
    }

    return (
        <Container style={{ textAlign: 'left' }}>
            <h2 className='my-3 '>{recipeDetails?.recipeName}</h2>

            <div className='my-4'>
                <p> <span className='fs-4 '>Description : </span>{recipeDetails?.description}</p>
            </div>
            <h5 className='mt-4'>Ingredients</h5>
            <ul>
                {recipeDetails?.ingredients?.split(",").map((ingredient, index) => <li key={index}>{ingredient}</li>)}
            </ul>
        </Container>
    );
};

export default RecipeDetails;