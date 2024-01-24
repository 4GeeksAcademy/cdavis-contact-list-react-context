// ContactList.js
import React, { useContext } from 'react';
import { ContactContext } from './views/ContactContext';

const ContactList = () => {
  const { state, dispatch } = useContext(ContactContext);

  const handleDeleteContact = async (contactId) => {
    const userConfirmed = window.confirm("Are you sure you want to delete this contact?");
    if (!userConfirmed) {
      return;
    }

    try {
      const resp = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
        method: "DELETE",
      });
      dispatch({ type: 'DELETE_CONTACT', payload: contactId });
    } catch (error) {
      console.error("Error deleting contact: ", error);
    }
  };

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {state.contactList.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email}
            <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
