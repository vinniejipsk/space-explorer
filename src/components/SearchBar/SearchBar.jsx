import React, { useState } from 'react';

import CelestialData from '../CelestialData/CelestialData';

function SearchBar(props) {

  const [searchInput, setSearchInput] = useState("");
  const [sortedData, setSortedData] = useState(CelestialData);
  const [sortType, setSortType] = useState('default');

  const sortClosest = (a, b) => a.distance_earth_km - b.distance_earth_km;
  const sortFurthest = (a, b) => b.distance_earth_km - a.distance_earth_km;
  const sortSmallest = (a, b) => a.diameter_km - b.diameter_km;
  const sortBiggest = (a, b) => b.diameter_km - a.diameter_km;

  const sortFunctions = {
    'default': () => [...CelestialData],
    'closest': () => [...CelestialData].sort(sortClosest),
    'furthest': () => [...CelestialData].sort(sortFurthest),
    'smallest': () => [...CelestialData].sort(sortSmallest),
    'biggest': () => [...CelestialData].sort(sortBiggest),
  };

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  function searchSubmit(e) {
    e.preventDefault();
    props.setWorldSearch(searchInput);
    setSearchInput("");
  }

  function handleSortChange(e) {
    const type = e.target.value;
    setSortType(type);
    setSortedData(sortFunctions[type]());
  }

  function handleCelestialClick(name) {
    setSearchInput(name);
    props.setWorldSearch(name);
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
        <button type="submit" className="search-button">Search</button>
      </form>
      <div>
        <label>
          <input 
            type="radio" 
            name="sort"
            value="default" 
            checked={sortType === 'default'}
            onChange={handleSortChange}
          />
          Default
        </label>
        <label>
          <input 
            type="radio" 
            name="sort"
            value="closest" 
            checked={sortType === 'closest'}
            onChange={handleSortChange}
          />
          Closest to Earth
        </label>
        <label>
          <input 
            type="radio" 
            name="sort"
            value="furthest" 
            checked={sortType === 'furthest'}
            onChange={handleSortChange}
          />
          Furthest from Earth
        </label>
        <label>
          <input 
            type="radio" 
            name="sort"
            value="smallest" 
            checked={sortType === 'smallest'}
            onChange={handleSortChange}
          />
          Smallest Size
        </label>
        <label>
          <input 
            type="radio" 
            name="sort"
            value="biggest" 
            checked={sortType === 'biggest'}
            onChange={handleSortChange}
          />
          Largest Size
        </label>
      </div>
      <div>
        {sortedData.map(celestial => (
          <button key={celestial.name} onClick={() => handleCelestialClick(celestial.name)}>
            {celestial.name}
          </button>
        ))}
      </div>
    </>
  );
}

export default SearchBar;
