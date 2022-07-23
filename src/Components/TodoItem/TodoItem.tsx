import React, {FC} from 'react';

import { ITodo } from '../Main/types'

interface ITodoItem extends ITodo {
    toggleTodo: (id: number) => void 
}

const TodoItem: FC<ITodoItem> = ({ id, title, completed, toggleTodo }) => {
    return (
        <div>
            <input type="checkbox" checked={completed} onChange={() => toggleTodo(id) }/>
            {title}
        </div>
    )
}

export default TodoItem