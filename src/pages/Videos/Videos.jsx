import { useEffect, useState } from 'react';

import Navigation from '../../components/Navigation/Navigation';
import VideoItem from '../../components/VideoItem/VideoItem';

import './Videos.css';

function Videos() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {

      fetch('https://images-api.nasa.gov/search?media_type=video')

        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => setVideos(data.collection.items))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

      return (
        <>

          <Navigation />

          <div className="videos-container">
            {videos.map((video, index) => (
              <div className="video-item" key={index}>
                <VideoItem
                  title={video.data[0].title}
                  thumbnailUrl={video.links ? video.links[0].href : null}
                />
              </div>
            ))}
          </div>
          
        </>
    );
}

export default Videos