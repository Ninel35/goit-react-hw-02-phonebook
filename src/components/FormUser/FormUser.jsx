const FormUser = ({ handler }) => {
    return (
        <>
            <h2>Phonebook</h2>
            <form onSubmit={handler}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" required />
                <button type="submit">Add contact</button>
            </form>
           
        </>
     
    );
};
export default FormUser;