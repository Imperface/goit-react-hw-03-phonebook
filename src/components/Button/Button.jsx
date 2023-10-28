import css from './Button.module.css';
export const Button = ({ text, type, onClick = null, dataId = null }) => {
  return (
    <button
      className={css.button}
      type={type}
      onClick={onClick}
      data-id={dataId}
    >
      {text}
    </button>
  );
};
