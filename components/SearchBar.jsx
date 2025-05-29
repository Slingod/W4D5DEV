import React from 'react';
const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Rechercher un thème..."
      onChange={onSearch}
    />
  );
};

export default SearchBar;
