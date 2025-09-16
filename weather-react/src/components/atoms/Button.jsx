export default function Button({ label, onClick }) {
  return (
    <button className="search-form-button" onClick={onClick}>
      {label}
    </button>
  );
}
