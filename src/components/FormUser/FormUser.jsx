import css from './FormUser.module.css';

const FormUser = ({ handler }) => {
    return (
        <>
            <form onSubmit={handler} className={css.formuser}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" required />
                  <label htmlFor="number">Number</label>
                <input type="tel" name="number" required />
                <button type="submit">Add contact</button>
            </form>
           
        </>
     
    );
};
export default FormUser;