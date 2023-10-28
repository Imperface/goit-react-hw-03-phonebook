import { Button } from 'components';
import css from './ContactsListItem.module.css';
export const ContactsListItem = ({ data, onContactDeleteButtonClick }) => {
  return (
    <li className={css.ContactsListItem} id={data.id}>
      <p>
        {data.name}: {data.tel}
      </p>
      <Button
        text="Delete"
        type="button"
        onClick={onContactDeleteButtonClick}
        dataId={data.id}
      />
    </li>
  );
};
