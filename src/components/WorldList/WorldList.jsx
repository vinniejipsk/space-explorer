import React from 'react';
import WorldListItem from '../WorldListItem/WorldListItem';

function WorldList({ worldData, onItemSelect }) {

    return (
        <div className="worldList">
            {worldData.collection.items.map((item, index) => (
                <WorldListItem 
                    key={index} 
                    url={item.links[0].href} 
                    title={item.data[0].title} 
                    handleItemClick={() => onItemSelect(item)}
                />
            ))}
        </div>
    );
}

export default WorldList;
