import styles from './TextInput.module.scss';

const TextInput = ({ value, onChange, placeholder, className }) => (
  <input
    className={`${styles.input} ${className}`}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    type='text'
  />
);

export default TextInput;