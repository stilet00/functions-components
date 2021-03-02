import React, { Component } from 'react';

export default class TodoListItem extends Component {
    onItemClick = () => {
        this.props.onToggle(this.props.item.id);
    };

    onDeleteBtnClick = (e) => {
        e.stopPropagation();

        this.props.onDelete(this.props.item.id);
    };

    render() {
        const { item } = this.props;

        return (
            <li onClick={this.onItemClick} style={getItemStyle(item)}>
                {item.title}
                <span onClick={this.onDeleteBtnClick}>X</span>
            </li>
        );
    }
}

function getItemStyle({ completed }) {
    return {
        cursor: 'pointer',
        backgroundColor: completed ? 'green' : 'yellow',
    };
}
