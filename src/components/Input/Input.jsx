import css from './Input.module.css';
export const Input = ({ type, name, onFilterInput = null }) => {
  return (
    <label className={css.label}>
      {name}
      <input
        className={css.input}
        type={type}
        name={name}
        onInput={onFilterInput}
        required
      />
    </label>
  );
};
