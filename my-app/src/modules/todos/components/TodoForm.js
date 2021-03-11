import {TODO} from "../constants";
import { useState } from 'react';


export default function TodoForm({onSave}) {
    const [todo, setTodo] = useState(TODO)
    const onInputChange = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value });
    };
    const onFormSubmit = (e) => {
        e.preventDefault();
        onSave(todo);
        setTodo({ title: '' });
    };

    return (
        <form onSubmit={onFormSubmit}>

            <input
                type="text"
                name="title"
                value={todo.title}
                onChange={onInputChange}
            />
            <button>Save</button>
        </form>
    );
}
