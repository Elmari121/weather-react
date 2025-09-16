export default function Input({ value, onChange, placeholder }) {
  return (
    <input
      type="search"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="search-form-input"
    />
  );
}
