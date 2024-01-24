// Home.js
import React, { useContext, useEffect } from 'react';
import AddContact from './views/AddContact';
import ContactList from './ContactList';
import { ContactContext } from './views/ContactContext';

const Home = () => {
  const { state, dispatch } = useContext(ContactContext);

  useEffect(() => {
    // Simula la carga de datos iniciales al montar el componente
    const fetchData = async () => {
      try {
        const resp = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda");
        const data = await resp.json();
        dispatch({ type: 'LOAD_DATA', payload: data });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Contact Manager</h1>
      <AddContact />
      <ContactList />
    </div>
  );
};

export default Home;
