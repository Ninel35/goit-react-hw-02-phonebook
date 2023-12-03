const ElementContact = ({contact}) => {
    return (
        <li id={contact.id} > {contact.name}   {contact.number}</li>
    )
};
export default ElementContact;