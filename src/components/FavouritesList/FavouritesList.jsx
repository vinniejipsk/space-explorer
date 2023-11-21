import { useEffect, useState } from "react";
import FavouritesListItem from "../FavouriteListItem/FavouriteListItem";

import './FavouritesList.css'

function FavouritesList() {

  const [favSpaceData, setFavSpaceData] = useState([]);

  //airtable fetch
  const TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
  // need to update airtable table ID;
  const BASE_URL = "https://api.airtable.com/v0/appFFEGBwUf8bQvIk"

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

    return (
      <>
        <div>
          {favSpaceData.map((item, index) => (
            <FavouritesListItem 
              key={index} 
              title={item.title} 
              image={item.image} 
              comment={item.comment} 
            />
          ))}
        </div>
      </>
    );
  }

  export default FavouritesList;
