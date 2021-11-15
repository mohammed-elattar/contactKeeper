import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const { _id, name, type, email, phone } = contact;
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const typeClass = type === 'professional' ? 'badge-success' : 'badge-primary';

  const onDelete = (e) => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span style={{ float: 'right' }} className={`badge ${typeClass}`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <FontAwesomeIcon icon={faEnvelopeOpen} /> {email}
          </li>
        )}
        {phone && (
          <li>
            <FontAwesomeIcon icon={faPhone} /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-small btn-dark'
          onClick={(e) => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-small btn-danger' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
