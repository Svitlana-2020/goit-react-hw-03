import css from '../ContactList/ContactList.module.css'
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contacts = ({contact, handleDelete}) => {
return (
<div className={css.wrapper}>
    <div className={css.content}>
    <p className={css.text}><FaUser className={css.icon} />{contact.username}</p>
    <p className={css.text}><FaPhoneAlt className={css.icon}  />{contact.number}</p>
    </div>
    <button type='button'className={css.button} onClick={()=>handleDelete(contact.id)}>Delete</button>
    </div>
)
}

export default Contacts