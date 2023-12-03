const Contacts = ({contactList}) => {
    return (
        <>
            <h2>Contacts</h2>
            <ul>
                {contactList.map((contact)=> (<li>{contact}</li>))}
            </ul>
        </>
    );
};
export default Contacts;