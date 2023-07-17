import React, { Component } from 'react';
import { Form, Button } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onHandleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.onHandleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.onHandleChange}
          required
        />
        <input
          type="tel"
          name="number"
          placeholder="Phone number"
          value={number}
          onChange={this.onHandleChange}
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
