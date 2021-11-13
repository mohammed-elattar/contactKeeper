import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;
  const renderItems = (contacts) =>
    contacts.map((contact) => (
      <CSSTransition timeout={1000} key={contact.id} classNames='item'>
        <ContactItem contact={contact} />
      </CSSTransition>
    ));

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null ? renderItems(filtered) : renderItems(contacts)}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
