import React from 'react';
import { ListItem, Span } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ListItem>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Span>{contact.name}</Span>
          <Span>{contact.number}</Span>
          <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ListItem>
  );
};

export default ContactList;
