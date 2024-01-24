// ContactList.js
import React, { useContext } from 'react';
import { ContactContext } from './ContactContext';

const ContactList = () => {
  const { contacts, removeContact } = useContext(ContactContext);

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email}
            <button onClick={() => removeContact(contact.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
