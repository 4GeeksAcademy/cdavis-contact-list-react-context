import React, { useContext, useEffect } from 'react';
import AddContact from './views/AddContact';
import ContactList from './component/ContactList';
import EditContact from './component/EditContact'; // Asumiendo que es EditContact en lugar de EditContactList
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
      <EditContact /> {/* Aquí se renderiza el componente de edición de contactos */}
    </div>
  );
};

export default Home;
