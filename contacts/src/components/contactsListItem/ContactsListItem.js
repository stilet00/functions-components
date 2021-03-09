import React, { Component } from 'react';

export class ContactsListItem extends Component {
    onDeleteClick = (e) => {
        e.preventDefault();

        this.props.onDelete(this.props.contact);
    };
    render() {
        const { contact } = this.props;
        return (
            <li
                className="contact-list-item"
                onClick={this.props.onSelect.bind(null, contact)}
            >
                {contact.name} {contact.surname} - {contact.phone}
                <a href="" onClick={this.onDeleteClick}>
                    Delete
                </a>
            </li>
        );
    }
}

export default ContactsListItem;
