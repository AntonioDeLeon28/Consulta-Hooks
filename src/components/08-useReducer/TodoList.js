import React from 'react'
import { TodoListItem } from './TodoListItem'
import './styles.css'

export const TodoList = ({ todos, handelToggle, handleDelete }) => {
    return (
        <ul className='list-group list-group-flush'>
            {
                todos.map((todo, i) => ( 
                    <TodoListItem key={ todo.id } todo={ todo } i={ i } handelToggle={ handelToggle } handleDelete={ handleDelete }/>                            
                ))
            }
        </ul>
    )
}
