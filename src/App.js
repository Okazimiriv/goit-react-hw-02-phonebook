import React, { Component } from 'react';

import Container from 'components/Container';
import ContactForm from 'components/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  onContactFormSubmit = contactData => {
    // const { name, number } = contactData;
    console.log(contactData);
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.onContactFormSubmit} />
        <div>
          <h2>Contacts</h2>
          <ul>
            <li>Rosie Simpson</li>
            <li>Hermione Kline</li>
            <li>Eden Clements</li>
          </ul>
        </div>
      </Container>
    );
  }
}

export default App;
