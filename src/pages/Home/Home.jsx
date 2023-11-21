import { useEffect, useState } from 'react';

import Navigation from '../../components/Navigation/Navigation'
import SearchBar from '../../components/SearchBar/SearchBar'
import WorldList from '../../components/WorldList/WorldList';
import FavouritesList from '../../components/FavouritesList/FavouritesList';
import ResultSummary from '../../components/ResultSummary/ResultSummary';

import './Home.css';

function Home() {

  const [worldSearch, setWorldSearch] = useState("");
  const [worldData, setWorldData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {

    if (!worldSearch) {
      return;
    }

    const worldUrl = `https://images-api.nasa.gov/search?q=${encodeURIComponent(worldSearch)}&media_type=image`;
  
    const worldApiCall = async () => {

        const response = await fetch(worldUrl);
        const data = await response.json();
        setWorldData(data);
    };
  
    worldApiCall();

  }, [worldSearch]);

  return (
    <div>
      <div className="navigation-container">
        <Navigation />
      </div>
      <div className="main-container">
        <FavouritesList />
        <div className="search-and-list-container">
          <h1>Welcome Space Explorer</h1>
          <div className="header-title">Search for your favourite space images!</div>
          <div className="search-bar">
            <SearchBar setWorldSearch={setWorldSearch} />
          </div>
          {worldSearch && worldData ? <WorldList worldData={worldData} onItemSelect={handleItemClick} /> : null}
        </div>
        <ResultSummary selectedItem={selectedItem} />
      </div>
    </div>
  );
}

export default Home
