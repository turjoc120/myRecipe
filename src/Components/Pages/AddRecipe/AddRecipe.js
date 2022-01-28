import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from 'sweetalert2';

const AddRecipe = () => {

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
        <div className='bg-dark d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
            <>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column w-50 mx-auto'>

                    <input className='mt-3 ps-2' placeholder='Recipe Name' {...register("recipeName", { required: true })} />
                    {errors.recipeName && <small className='text-danger'>*This field is required</small>}

                    <input className='mt-3 ps-2' placeholder='Ingredients (write using commas)' {...register("ingredients", { required: true })} />
                    {errors.ingredients && <small className='text-danger'>*This field is required</small>}

                    <textarea rows="10" className='mt-3 ps-2' placeholder='Description' {...register("description", { required: true })} />
                    {errors.description && <small className='text-danger'>*This field is required</small>}

                    <input className='btn btn-outline-light py-3 mt-3' type="submit" value={"Add Recipe"} />
                </form>
            </>
        </div>
    );
};

export default AddRecipe;