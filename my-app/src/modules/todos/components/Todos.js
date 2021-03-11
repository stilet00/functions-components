import {
    createTodo,
    deleteTodo,
    getTodos,
    updateTodo,
} from '../services/todosService';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useState, useEffect} from 'react';

export default function Todos(props) {
    const [todos, setTodos] = useState([])
    useEffect(() => {
     getTodos().then(todos => setTodos(todos))
    }, [])


    const deleteItem = (id) => {
        deleteTodo(id).then(res => setTodos(todos.filter((item) => item.id !== res.id)))
    };
    const createItem = (newItem) => {
        newItem.completed = false;
        createTodo(newItem).then((data) => {
            setTodos([...todos, data]);
        });
    };
    const toggleItem = (id) => {
        const item = todos.find((l) => l.id === id);
        const newItem = { ...item, completed: !item.completed };

        updateTodo(newItem).then(() => {
            setTodos(todos.map((item) => item.id !== id ? item : newItem));
        });
    };

    return (
        <>
            <TodoList
                todos={todos}
                onToggle={toggleItem}
                onDelete={deleteItem}
            />
            <TodoForm onSave={createItem} />
        </>
    );
}