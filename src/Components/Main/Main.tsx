import React, { FC, useState } from 'react';
import './Main.sass';
import TodoList from '../TodoList';

import {ITodo} from "./types"

const Header: FC = () => {
    const [value, setValue] = useState("")
    const [todos, setTodos] = useState<ITodo[]>([])

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const handelKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter") addTodo()
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo

            return {
                ...todo,
                completed: !todo.completed
            }
        }))
    }

    const addTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                completed: false
            }])
            setValue("")
        }
    }

    return ( <>
        <div>
            <input value={value} onChange={handleChange} onKeyDown={handelKeyDown}/>
            <button onClick={addTodo}>Add</button>
        </div>
        <TodoList items={todos} toggleTodo={toggleTodo}/>
        </>)
}

export default Header