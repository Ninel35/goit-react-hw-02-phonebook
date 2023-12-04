import ElementContact from "components/ElementContact/ElementContact";
import css from './Contacts.module.css'
const Contacts = ({contactList, filter, handleDelete}) => {
    return (
        <>
            <ul>
                {contactList.filter((elem) => {
                    if (filter === '' || elem.name.toLowerCase().includes(filter.toLowerCase())) {
                        return true
                    } else return false
                })
                    .map((contact) => (
                        <ElementContact contact={contact} key={contact.id} >
                           <button className={css.deluser} onClick={handleDelete} type="button">Delete</button>
                        </ElementContact>
                    ))}
            </ul>
        </>
    )
};
export default Contacts;