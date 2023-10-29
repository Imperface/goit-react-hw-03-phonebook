import css from './Input.module.css';
export const Input = ({ type, name, onFilterInput = null, value }) => {
  return (
    <label className={css.label}>
      {name}
      <input
        className={css.input}
        type={type}
        name={name}
        onInput={onFilterInput}
        value={value}
        required
      />
    </label>
  );
};
