import ElementContact from "components/ElementContact/ElementContact";

const Contacts = ({contactList, filter}) => {
    return (
        <>
            <ul>
                {contactList.filter((elem, indx, array) => {
                    if (filter === '' || elem.name.toLowerCase().includes(filter.toLowerCase())) {
                        return true;
                    } else return false;
                })
            .map((contact) => <ElementContact contact={contact} key={contact.id}/>)}
            </ul>
        </>
    );
};
export default Contacts;