import { useEffect, useState } from "react";
import FavouritesListItem from "../FavouriteListItem/FavouriteListItem";

import './FavouritesList.css'

function FavouritesList({ favSpaceData }) {

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
