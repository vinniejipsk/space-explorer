import { useEffect, useState } from "react";
import FavouritesListItem from "../FavouriteListItem/FavouriteListItem";

import './FavouritesList.css'

function FavouritesList({ favSpaceData, onItemDelete, onUpdate }) {

    return (
      <>
        <div className="favourite-container">
          {favSpaceData.map((item, index) => (
            <FavouritesListItem 
              key={index} 
              title={item.title} 
              image={item.image} 
              comment={item.comment} 
              onDelete={() => onItemDelete(item.id)}
              onUpdate={(newComment) => onUpdate(item.id, newComment)}
            />
          ))}
        </div>
      </>
    );
  }

  export default FavouritesList;
