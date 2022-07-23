import React, {FC} from 'react';
import {ITodo} from '../Main/types'
import TodoItem from '../TodoItem';

interface ITodoList {
    items: ITodo[],
    toggleTodo: (id: number) => void
}

const TodoList: FC<ITodoList> = ({ items, toggleTodo }) => {
    return (
        <div>
            {
                items.map(todo => <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/>)
            }
        </div>
    )
}

export default TodoList