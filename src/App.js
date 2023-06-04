import React, { Component } from 'react';
import shortId from 'shortid';

import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import initialContacts from '../src/contacts.json';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  onContactFormSubmit = contactData => {
    const id = shortId.generate();
    const { name, number } = contactData;
    const newContact = { id, name, number };
    console.log('name', name);
    console.log('number', number);

    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          onAddContact={this.onContactFormSubmit}
          contacts={contacts}
        />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
