import React from 'react'
import './styles.css'

export const TodoListItem = ({ todo, i, handelToggle, handleDelete }) => {
    return (
        <li className='list-group-item mt-1'>
            <p className={`${todo.done && 'complete'}`} onClick={() => { handelToggle(todo.id) }}> {i + 1}. {todo.desc} </p>
            <button className='btn btn-danger' onClick={() => { handleDelete(todo.id) }}> Borrar </button>
        </li>
    )
}
