import PropTypes from 'prop-types';
import css from './ContactItems.module.css';

import { useDeleteContactMutation } from 'redux/contactsApi';

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li className={css.contactItem}>
      {name}: {phone}
      <button
        className={css.contactItem__btn}
        type="button"
        onClick={() => deleteContact(id)}
      >
        {isDeleting ? 'Deleting ...' : 'delete'}
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
};

export default ContactItem;
