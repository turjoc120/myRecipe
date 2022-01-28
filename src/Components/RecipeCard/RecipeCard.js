import axios from 'axios';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const RecipeCard = ({ recipe }) => {
    const { recipeName, description, _id } = recipe

    const deleteRecipe = (id) => {

        Swal.fire({
            title: 'Are You Sure ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/recipe/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'This Recipe has been deleted.',
                            'success'
                        )
                    }
                })
            }
        })


    }

    return (

        <Col >
            <Card style={{ width: '18rem' }} className='rounded-2 shadow-sm'>
                <Card.Body>
                    <Card.Title>{recipeName}</Card.Title>
                    <Card.Text>
                        {description?.slice(0, 110) + "...."}
                    </Card.Text>
                    <Link to={`/edit-recipe/${_id}`}>
                        <Button variant="info" className='me-5 px-4'>Edit <i className="far fa-edit"></i></Button>
                    </Link>
                    <Button onClick={() => deleteRecipe(_id)} variant="danger">Delete <i className="fas fa-trash-alt"></i></Button>
                    <Link to={`/recipe/${_id}`}>
                        <Button variant="outline-danger" className="w-100 mt-3">View Details</Button>
                    </Link>

                </Card.Body>
            </Card>
        </Col >

    );
};

export default RecipeCard;