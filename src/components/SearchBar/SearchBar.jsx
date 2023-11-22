import React, { useState } from 'react';

function SearchBar(props) {

  const [searchInput, setSearchInput] = useState("");

  const keywords = ["Earth Planet", "Mars Planet", "Venus Planet", "Exoplanets", "Galaxy"];

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  function handleKeywordClick(keyword) {
    setSearchInput(keyword);
    props.setWorldSearch(keyword);
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
      <div className="keyword-buttons">
        {keywords.map((keyword, index) => (
          <button key={index} onClick={() => handleKeywordClick(keyword)} >
            {keyword}
          </button>
        ))}
      </div>
    </>
  );
}

export default SearchBar;
