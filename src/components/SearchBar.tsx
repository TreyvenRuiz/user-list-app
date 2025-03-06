interface SearchBarProps {
    search: string;
    setSearch: (search: string) => void;
  }
  
  const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
    return (
      <input
        type="text"
        placeholder="Search users..."
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    );
  };
  
  export default SearchBar;
  