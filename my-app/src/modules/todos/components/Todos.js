import React, { Component } from 'react';
import {
    createTodo,
    deleteTodo,
    getTodos,
    updateTodo,
} from '../services/todosService';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class Todos extends Component {
    state = {
        list: [],
    };

    componentDidMount() {
        getTodos().then((list) => this.setState({ list }));
    }

    toggleItem = (id) => {
        const item = this.state.list.find((l) => l.id === id);
        const newItem = { ...item, completed: !item.completed };

        updateTodo(newItem).then(() => {
            this.setState({
                list: this.state.list.map((item) =>
                    item.id !== id ? item : newItem
                ),
            });
        });
    };

    deleteItem = (id) => {
        deleteTodo(id);

        this.setState({
            list: this.state.list.filter((item) => item.id !== id),
        });
    };

    createItem = (newItem) => {
        newItem.completed = false;

        createTodo(newItem).then((data) => {
            this.setState({ list: [...this.state.list, data] });
        });
    };

    render() {
        return (
            <>
                <TodoList
                    list={this.state.list}
                    onToggle={this.toggleItem}
                    onDelete={this.deleteItem}
                />
                <TodoForm onSave={this.createItem} />
            </>
        );
    }
}
