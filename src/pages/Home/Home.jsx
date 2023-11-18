import { useEffect, useState } from 'react';

import Navigation from '../../components/Navigation/Navigation'
import SearchBar from '../../components/SearchBar/SearchBar'
import WorldList from '../../components/WorldList/WorldList';

import './Home.css';

function Home() {

  const [worldSearch, setWorldSearch] = useState("");
  const [worldData, setWorldData] = useState(null);

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
    <>
      <Navigation />
      <h1>Welcome Spacer</h1>
      <div>Search for you favourite Exoplanets!</div>

      <SearchBar setWorldSearch={setWorldSearch} />
      {worldSearch && worldData ? <WorldList worldData={worldData} /> : null}
    </>
  );
}

export default Home
