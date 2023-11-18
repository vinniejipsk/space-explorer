import React from 'react';
import WorldListItem from '../WorldListItem/WorldListItem';

function WorldList({ worldData }) {

    return (
        <ul className="worldList">
            {worldData.collection.items.map((item, index) => (
                <WorldListItem 
                    key={index} 
                    url={item.links[0].href} 
                    title={item.data[0].title} 
                />
            ))}
        </ul>
    );
}

export default WorldList;
