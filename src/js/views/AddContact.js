// AddContact.js
import React, { useState, useContext } from 'react';
import { ContactContext } from '../component/ContactContext';

const AddContact = () => {
  const { addContact } = useContext(ContactContext);
  const [newContact, setNewContact] = useState({ name: '', email: '' });

  const handleInputChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleAddContact = () => {
    addContact({ ...newContact, id: Date.now() });
    setNewContact({ name: '', email: '' });
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <label>
        Name:
        <input type="text" name="name" value={newContact.name} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" value={newContact.email} onChange={handleInputChange} />
      </label>
      <button onClick={handleAddContact}>Add Contact</button>
    </div>
  );
};

export default AddContact;
