import { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <Input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city..."
      />
      <Button label="Search" />
    </form>
  );
}
