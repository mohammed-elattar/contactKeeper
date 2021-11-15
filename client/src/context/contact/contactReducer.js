import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  GET_CONTACTS,
  CLEAR_CONTACTS,
} from '../types';

const contactReducer = (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state, contacts: [...action.payload], loading: false };

    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
        loading: false,
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts.filter((contact) => contact._id !== action.payload),
        ],
        loading: false,
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts.map((contact) =>
            contact._id === action.payload.id ? action.payload : contact
          ),
        ],
        loading: false,
      };

    case SET_CURRENT:
      return { ...state, current: action.payload };

    case CLEAR_CURRENT:
      return { ...state, current: null };

    case FILTER_CONTACTS:
      const regex = new RegExp(`${action.payload}`, 'gi');
      return {
        ...state,
        filtered: [
          ...state.contacts.filter(
            (contact) => contact.name.match(regex) || contact.email.match(regex)
          ),
        ],
      };
    case CLEAR_FILTER:
      return { ...state, filtered: null };
    case CLEAR_CONTACTS:
      return {
        ...state,
        filtered: null,
        contacts: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default contactReducer;
