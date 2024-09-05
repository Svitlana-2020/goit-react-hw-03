import css from "./ContactList.module.css";
import Contacts from "./Contacts";

const ContactList = ({ contacts, handleDelete }) => {
    return (
      <ul className={css.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.listItem}>
            <Contacts contact={contact} handleDelete={handleDelete} />
          </li>
        ))}
      </ul>
    );
  };

{
  /* {contacts.map(contact => (
<li key={contact.id}> */
}
{
  /* <div className={css.wrapper}>
    <div className={css.content}>
    <p className={css.text}><FaUser className={css.icon} />{contact.username}</p>
    <p className={css.text}><FaPhoneAlt className={css.icon}  />{contact.number}</p>
    </div>
    <button type='button'className={css.button} onClick={()=>handleDelete(contact.id)}>Delete</button>
    {console.log(handleDelete)}
    </div> */
}
{
  /* </li>
        ))} */
}

// contacts.map(contact => (
//     <li key={contact.id}>
// <Contacts contacts={contacts} handleDelete={handleDelete} />
// </li>

export default ContactList;
