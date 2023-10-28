import css from './ContactAddForm.module.css';
export const ContactAddForm = ({ onSubmitButtonContactAdd, children }) => {
  return (
    <form className={css.form} onSubmit={onSubmitButtonContactAdd}>
      {children}
    </form>
  );
};
