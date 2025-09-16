import SearchBar from "./SearchBar";

export default {
  title: "Molecules/SearchBar", 
  component: SearchBar,
};

export const Default = () => <SearchBar />;
export const WithPlaceholder = () => <SearchBar placeholder="Search..." />;
