import css from './ContactsList.module.css';
export const ContactsList = ({ children }) => {
  return <ul className={css.contactsList}>{children}</ul>;
};
