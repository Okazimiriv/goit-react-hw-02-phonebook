import { Component } from 'react';
// import PropTypes from 'prop-types';
import shortId from 'shortid';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortId.generate();
  numberInputId = shortId.generate();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onAddContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={styles.ContactForm} onSubmit={this.handleSubmit}>
        <label className={styles.label} htmlFor={this.nameInputId}>
          Name
        </label>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          id={this.nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label className={styles.label} htmlFor={this.numberInputId}>
          Number
        </label>
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          id={this.numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

// ContactForm.propTypes = {
//   onAddContact: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };

export default ContactForm;
