// ContactContext.js
import React, { createContext, useState } from 'react';

const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    // Agrega más contactos según sea necesario
  ]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const removeContact = (contactId) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact, removeContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactProvider };
