import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useState } from "react";
import { nanoid } from "nanoid";
import contactsArr from "./contacts.json";

const contactsAr = contactsArr.map(contact => ({
  ...contact,
  id: nanoid(),
}));

console.log(contactsAr)


function App() {
  const [filter, setFilter] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(contactsAr);
  const [contacts, setContact] = useState([]);

  const handleFilter = (evt) => {
    const filterValue = evt.target.value;
    setFilter(filterValue);
    const filteredContact = contactsAr.filter((contact) =>
      contact.username.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredContacts(filteredContact);
  };

  const handleSubmit = ({ username, number }) => {
    const newContact = {
      id: nanoid(),
      username,
      number,
    };

    setContact(prevContacts => [...prevContacts, newContact]);
  };

  const handleDelete = (id) => {
    setContact(prevContacts => prevContacts.filter(contact => contact.id !== id));
    console.log(id)
  };

  return (
    <>
      <h1 className="title">Phonebook</h1>
    
      <ContactForm value={contacts} onSubmit={handleSubmit} />
      {/* <ContactList contacts={contacts} /> */}
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
      {/* <ContactList contacts={filteredContacts} /> */}
      <SearchBox value={filter} onChange={handleFilter} />
    </>
  );
}

export default App;
