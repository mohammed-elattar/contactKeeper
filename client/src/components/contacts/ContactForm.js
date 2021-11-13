import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const { addContact, updateContact, clearCurrent, current } =
    useContext(ContactContext);

  useEffect(() => {
    if (current) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [current, ContactContext]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current) {
      updateContact(contact);
    } else {
      addContact(contact);
    }

    clearCurrent();
  };

  const clearAll = (e) => {
    clearCurrent();
  };
  const { name, email, phone, type } = contact;
  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Email'
        value={email}
        name='email'
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone'
        value={phone}
        name='phone'
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        value='personal'
        name='type'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional
      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            ClearAll
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
