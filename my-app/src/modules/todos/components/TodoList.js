import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.list.map((item) => (
                    <TodoListItem
                        key={item.id}
                        item={item}
                        onToggle={this.props.onToggle}
                        onDelete={this.props.onDelete}
                    />
                ))}
            </ul>
        );
    }
}
