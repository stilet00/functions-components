import React from 'react';
import './Contacts.css';

import ContactsList from '../contactsList/ContactsList';
import ContactForm from '../contactForm/ContactForm';
import contactsService from '../../contactsService';

class Contacts extends React.Component {
    state = {
        selectedContact: this.getEmptyContact(),
        contacts: [],
        page: 'list',
    };

    componentDidMount() {
        contactsService.getList().then((data) =>
            this.setState({
                contacts: data,
            })
        );
    }

    getEmptyContact() {
        return {
            name: '',
            surname: '',
            phone: '',
        };
    }

    onAddNewBtnClick = () => {
        this.setState({
            selectedContact: this.getEmptyContact(),
        });

        this.openForm();
    };

    onContactSelect = (contact) => {
        this.setState({
            selectedContact: contact,
        });

        this.openForm();
    };

    onDelete = (contact) => {
        const contacts = this.state.contacts.filter((el) => el !== contact);

        contactsService.delete(contact.id);
        this.setState({
            contacts,
            selectedContact: this.getEmptyContact(),
        });
    };

    onSave = (contact) => {
        if (contact.id) {
            this.updateContact(contact);
        } else {
            this.createContact(contact);
        }
        this.closeForm();
    };

    // onChange = (name, value) => {
    //     this.setState({
    //         selectedContact: { ...this.state.selectedContact, [name]: value },
    //     });
    // };

    closeForm = () => {
        this.setState({ page: 'list' });
    };

    openForm = () => {
        this.setState({ page: 'form' });

        this.setState((state) => {
            return {
                isFormVisible: state.page === 'form',
            };
        });

        console.log(this.state.page);
    };

    createContact(contact) {
        contactsService.create(contact).then(({ data }) => {
            const contacts = [...this.state.contacts, data];

            this.setState({
                contacts,
                selectedContact: data,
            });
        });
    }

    updateContact(contact) {
        contactsService.update(contact);
        this.setState({
            contacts: this.state.contacts.map((el) =>
                el.id === contact.id ? contact : el
            ),
            selectedContact: contact,
        });
    }

    render() {
        return (
            <>
                <>
                    <ContactsList
                        contacts={this.state.contacts}
                        onSelect={this.onContactSelect}
                        onDelete={this.onDelete}
                    ></ContactsList>
                    <button
                        onClick={this.onAddNewBtnClick}
                        className="add-new-contact-btn"
                    >
                        Add new
                    </button>
                </>

                <ContactForm
                    key={this.state.selectedContact.id}
                    contact={this.state.selectedContact}
                    onCancel={this.closeForm}
                    onSave={this.onSave}
                    // onChange={this.onChange}
                ></ContactForm>
            </>
        );
    }
}

export default Contacts;
