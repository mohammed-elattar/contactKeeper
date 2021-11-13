import React, { useReducer } from 'react';
import * as uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';
import contactContext from './contactContext';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Nabila',
        email: 'nabila@test.com',
        phone: '1111-1111-1111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Rabab',
        email: 'rabab@test.com',
        phone: '2222-1111-1111',
        type: 'professional',
      },
      {
        id: 3,
        name: 'Malika',
        email: 'Malika@test.com',
        phone: '3333-1111-1111',
        type: 'personal',
      },
    ],
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);
  const addContact = (contact) => {
    contact.id = uuid.v4();

    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  return (
    <ContactContext.Provider value={{ contacts: state.contacts, addContact }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
