import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from 'sweetalert2';
import { Container } from 'react-bootstrap';
const AddRecipe = () => {

    // form styles 
    const formStyles = {
        padding: "10px",
        borderRadius: "10px",
        border: " 1px solid gray"
    }

    // hook form 
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:5000/addRecipe', data).then(res => {
            if (res.data.insertedId) {
                Swal.fire(
                    'Done!',
                    'The Recipe Has Been Added',
                    'success'
                )
            }
        })
        reset()
    }

    return (
        <Container style={{ height: "100vh" }}>
            <h2>Add New <span className='text-info'>Recipe</span></h2>
            <div className='d-flex justify-content-center align-items-center' >
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column w-50 mx-auto'>

                    <input style={formStyles} className='mt-3 ps-2 ' placeholder='Recipe Name' {...register("recipeName", { required: true })} />
                    {errors.recipeName && <small className='text-danger'>*This field is required</small>}

                    <input style={formStyles} className='mt-3 ps-2' placeholder='Ingredients (write using commas)' {...register("ingredients", { required: true })} />
                    {errors.ingredients && <small className='text-danger'>*This field is required</small>}

                    <textarea style={formStyles} rows="10" className='mt-3 ps-2' placeholder='Description' {...register("description", { required: true })} />
                    {errors.description && <small className='text-danger'>*This field is required</small>}

                    <input className='btn btn-outline-primary py-3 mt-3' type="submit" value={"Add Recipe"} />
                </form>
            </div>
        </Container>
    );
};

export default AddRecipe;