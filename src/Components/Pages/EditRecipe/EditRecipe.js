import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

const EditRecipe = () => {
    const [recipeDetails, setRecipeDetails] = useState({ recipeName: "", ingredients: "", description: "" })

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { recipeId } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/recipe/${recipeId}`).then(res => {
            reset(res.data)
            setRecipeDetails(res.data)
        })
    }, [reset])


    const onSubmit = data => {
        Swal.fire({
            title: 'Are You Sure ?',
            text: "Previous Recipe Wil Be Updated",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`http://localhost:5000/recipe/${recipeId}`, data).then((res) => {
                    if (res.data.modifiedCount > 0) {
                        Swal.fire(
                            'Updated!',
                            'Your Recipe Has Been Updated.',
                            'success'
                        )
                    }
                })
            }
        })
    }

    return (
        <div style={{ height: "100vh" }}>
            <h2 className='my-4'>Edit Your Recipe</h2>
            <div className='d-flex justify-content-center align-items-center' >

                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column w-50 mx-auto'>

                    {RecipeDetails && <input className='mt-3 ps-2' placeholder='Recipe Name' {...register("recipeName", { required: true })} />}
                    {errors.recipeName && <small className='text-danger'>*This field is required</small>}

                    <input className='mt-3 ps-2' placeholder='Ingredients' {...register("ingredients", { required: true })} />
                    {errors.ingredients && <small className='text-danger'>*This field is required</small>}

                    <textarea rows="10" className='mt-3 ps-2' placeholder='Description' {...register("description", { required: true })} />
                    {errors.description && <small className='text-danger'>*This field is required</small>}


                    <input className='btn btn-outline-danger py-3 mt-3' type="submit" value={"Update Recipe"} />
                </form>
            </div>
        </div>
    );
};

export default EditRecipe;