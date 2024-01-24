// AddContact.js
import React, { useState, useContext } from 'react';
import { ContactContext } from './ContactContext';

const AddContact = () => {
  const { dispatch } = useContext(ContactContext);
  const [newContact, setNewContact] = useState({ name: '', email: '' });

  const handleInputChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleAddContact = async () => {
    try {
      const resp = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newContact),
      });
      const data = await resp.json();
      dispatch({ type: 'ADD_CONTACT', payload: data });
      setNewContact({ name: '', email: '' });
    } catch (error) {
      console.error("Error adding contact: ", error);
    }
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
