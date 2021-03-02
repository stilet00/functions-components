import React, { Component } from 'react';

export default class TodoForm extends Component {
    state = {
        todo: {
            title: '',
        },
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSave(this.state.todo);
        this.setState({ todo: { title: '' } });
    };

    onInputChange = (e) => {
        this.setState({
            todo: { ...this.state.todo, [e.target.name]: e.target.value },
        });
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    type="text"
                    name="title"
                    value={this.state.todo.title}
                    onChange={this.onInputChange}
                />
                <button>Save</button>
            </form>
        );
    }
}
