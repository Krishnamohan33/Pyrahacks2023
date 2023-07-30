import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    const searchQuery = e.target.value;
    onSearch(searchQuery);
  };

  return (
    <div style={styles.searchBar}>
      <input
        type="text"
        placeholder="Search games..."
        onChange={handleInputChange}
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  searchBar: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
};

export default SearchBar;
