import { useEffect, useState } from 'react';

import Navigation from '../../components/Navigation/Navigation'
import SearchBar from '../../components/SearchBar/SearchBar'
import WorldList from '../../components/WorldList/WorldList';
import FavouritesList from '../../components/FavouritesList/FavouritesList';
import ResultSummary from '../../components/ResultSummary/ResultSummary';
import FavouriteComment from '../../components/FavouriteComment/FavouriteComment';

import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo';
import myVideo from '../../assets/background_video/earth.mp4';

import './Home.css';

function Home() {

  const [worldSearch, setWorldSearch] = useState("");
  const [worldData, setWorldData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [favSpaceData, setFavSpaceData] = useState([]);
  const [comment, setComment] = useState('');

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

  const deleteFromFavorites = async (id) => {
    await fetch(`${BASE_URL}/favSpaceAT/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    setFavSpaceData(favSpaceData.filter(item => item.id !== id));
  };

  return (
    
    <div className="main-container">
      <BackgroundVideo src={myVideo} />
      <div className="navigation-container">
        <Navigation />
      </div>
      <div className="favourites-list-container">
        <FavouritesList favSpaceData={favSpaceData} onItemDelete={deleteFromFavorites} />
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
        <ResultSummary selectedItem={selectedItem} addToFavorites={addToFavorites} comment={comment} />
        {selectedItem && <FavouriteComment setComment={setComment} />}
      </div>
    </div>

  );
}

export default Home
