import React, { useRef, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const text = useRef('');
  const { filtered, clearFilter, filterContacts } = useContext(ContactContext);

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        type='text'
        ref={text}
        placeholder='Filter Contacts ...'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
