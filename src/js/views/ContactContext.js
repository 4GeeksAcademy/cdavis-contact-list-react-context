// ContactContext.js
import React, { createContext, useReducer } from 'react';

const ContactContext = createContext();

const initialState = {
  contactList: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return { ...state, contactList: action.payload };
    case 'ADD_CONTACT':
      return { ...state, contactList: [...state.contactList, action.payload] };
    case 'EDIT_CONTACT':
      const updatedList = state.contactList.map(contact =>
        contact.id === action.payload.id ? action.payload : contact
      );
      return { ...state, contactList: updatedList };
    case 'DELETE_CONTACT':
      const filteredList = state.contactList.filter(contact => contact.id !== action.payload);
      return { ...state, contactList: filteredList };
    default:
      return state;
  }
};

const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactProvider };
