// App.js
import React from 'react';
import ContactList from './ContactList';
import AddContact from './AddContact';
import EditContact from './EditContact';
import { ContactProvider } from './ContactContext';
import "../../styles/home.css";

const Home = () => {
  return (
    <ContactProvider>
      <div>
        <h1>Contact Manager</h1>
        <AddContact />
        <ContactList />
        <EditContact />
      </div>
    </ContactProvider>
  );
};

export default Home;
