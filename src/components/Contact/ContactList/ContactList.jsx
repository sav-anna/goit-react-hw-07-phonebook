import css from './ContactList.module.css';
import ContactItem from '../ContactItems';
import { useSelector } from 'react-redux';

export const ContactList = ({ contacts }) => {
  const filter = useSelector(state => state.filter.filter);

  const getVisibleContacts = () => {
    if (!filter) {
      return contacts;
    } else {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};
export default ContactList;
