import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter';
import ContactList from './Contact/ContactList';
import { useFetchContactsQuery } from 'redux/contactsApi';

export default function App() {
  const { data, isFetching } = useFetchContactsQuery();
  return (
    <div>
      <ContactForm />
      <Filter />
      {data?.length > 0 ? (
        <ContactList contacts={data} />
      ) : (
        <p className="app">You don’t have any contacts yet...🥺</p>
      )}
    </div>
  );
}
