// EditContact.js
import React, { useState, useContext } from 'react';
import { ContactContext } from './ContactContext';

const EditContact = ({ contact }) => {
  const { contacts, setContacts } = useContext(ContactContext);
  const [editedContact, setEditedContact] = useState({ ...contact });

  const handleInputChange = (e) => {
    setEditedContact({ ...editedContact, [e.target.name]: e.target.value });
  };

  const handleEditContact = () => {
    const updatedContacts = contacts.map((c) =>
      c.id === editedContact.id ? editedContact : c
    );
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h2>Edit Contact</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={editedContact.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={editedContact.email}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleEditContact}>Save Changes</button>
    </div>
  );
};

export default EditContact;
