import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [formState, handleInputChange, reset] = useForm({ description: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formState.description.trim().length === 0) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: formState.description,
            done: false,
        }

        handleAddTodo(newTodo);
        reset();

    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr/>

            <form onSubmit={handleSubmit}>

                <input
                    type='text'
                    name='description'
                    className='form-control'
                    placeholder='Aprender...'
                    autoComplete='off'
                    value={formState.description}
                    onChange={handleInputChange}
                />

                <button type='submit' className='btn btn-outline-primary mt-1 btn-block'> Agregar </button>

            </form>
        </>
    )
}
