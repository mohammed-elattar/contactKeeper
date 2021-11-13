import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;
  const renderItems = (contacts) =>
    contacts.map((contact) => (
      <ContactItem key={contact.id} contact={contact} />
    ));

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <Fragment>
      {filtered !== null ? renderItems(filtered) : renderItems(contacts)}
    </Fragment>
  );
};

export default Contacts;
