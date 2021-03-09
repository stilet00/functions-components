const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts/';

export default {
    getList() {
        return fetch(URL).then((res) => res.json());
    },
    create(contact) {
        return fetch(URL, {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json());
    },
    update(contact) {
        return fetch(URL + contact.id, {
            method: 'PUT',
            body: JSON.stringify(contact),
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json());
    },
    delete(id) {
        return fetch(URL + id, {
            method: 'DELETE',
        }).then((res) => res.json());
    },
};
