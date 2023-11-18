import React, { useState } from 'react';

function SearchBar(props) {

  const [searchInput, setSearchInput] = useState("");

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  function searchSubmit(e) {
    
    e.preventDefault();

    props.setWorldSearch(searchInput);

    setSearchInput("");
  }

  return (
    <>
      <form onSubmit={searchSubmit}>
        <input 
            value={searchInput}
            type="text"
            placeholder="Type here!"
            onChange={handleChange}
            className="search-input"
          />
          <button 
            type="submit"
            className="search-button"
          >
            Search
          </button>
      </form>
    </>
  );
}

export default SearchBar;
