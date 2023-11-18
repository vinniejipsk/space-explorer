import { useEffect, useState } from 'react';

import Navigation from '../../components/Navigation/Navigation';
import VideoItem from '../../components/VideoItem/VideoItem';

import './Videos.css';

function Videos() {

    const [videos, setVideos] = useState([]);

    async function VideosApiCall() {
      
        const response = await fetch('https://images-api.nasa.gov/search?media_type=video');
        const data = await response.json();
        setVideos(data.collection.items);
    }
    
    useEffect(() => {
      VideosApiCall();
    }, []);

      return (
        <>

          <Navigation />

          <div className="videos-container">
            {videos.map((video, index) => (
              <div className="video-item" key={index}>
                <VideoItem
                  // title={video.data[0].title}
                  thumbnailUrl={video.links[0].href}
                />
              </div>
            ))}
          </div>
          
        </>
    );
}

export default Videos