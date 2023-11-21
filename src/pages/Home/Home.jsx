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
  const [favSpaceData, setFavSpaceData] = useState([]);


  const TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
  const BASE_URL = "https://api.airtable.com/v0/appFFEGBwUf8bQvIk"

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

  useEffect(() => {
    async function fetchFavSpaces() {

      const response = await fetch(`${BASE_URL}/favSpaceAT`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      const jsonData = await response.json();
      const spaceData = jsonData.records.map((data) => ({
        ...data.fields,
        id: data.id,
      }));
      console.log(spaceData);
      setFavSpaceData(spaceData);
    }
    fetchFavSpaces();
  }, []);

  const postToFavorites = async (newFavItem) => {
    const response = await fetch(`${BASE_URL}/favSpaceAT`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({ fields: newFavItem })
    });
  };
  
  const addToFavorites = (newFavItem) => {
    setFavSpaceData([...favSpaceData, newFavItem]);
    postToFavorites(newFavItem);
  };

  return (
    <div className="main-container">
      <div className="navigation-container">
        <Navigation />
      </div>
      <div className="favourites-list-container">
        <FavouritesList favSpaceData={favSpaceData} />
      </div>
      <div className="search-and-list-container">
        <h1>Welcome Space Explorer</h1>
        <div className="header-title">Search for your favourite space images!</div>
        <div className="search-bar">
          <SearchBar setWorldSearch={setWorldSearch} />
        </div>
        {worldSearch && worldData ? <WorldList worldData={worldData} onItemSelect={handleItemClick} /> : null}
      </div>
      <div className="result-summary-container">
        <ResultSummary selectedItem={selectedItem} addToFavorites={addToFavorites} />
      </div>
    </div>
  );
}

export default Home
