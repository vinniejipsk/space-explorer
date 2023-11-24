import { useEffect, useState } from 'react';

import Navigation from '../../components/Navigation/Navigation';
import VideoItem from '../../components/VideoItem/VideoItem';

import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo';
import myBgVideo from '../../assets/background_video/earth.mp4';

import './Videos.css';

function Videos() {

  const [videos, setVideos] = useState([]);
  const [sortMethod, setSortMethod] = useState('recent');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');

  async function VideosApiCall() {
    const response = await fetch('https://images-api.nasa.gov/search?media_type=video');
    const data = await response.json();
    setVideos(data.collection.items);
  }
  useEffect(() => {
    VideosApiCall();
  }, []);

  async function fetchVideoUrl(nasaId) {
    const response = await fetch(`https://images-api.nasa.gov/asset/${nasaId}`);
    const data = await response.json();
    const videoFile = data.collection.items.find(item => item.href.endsWith('.mp4'));
    if (videoFile) {
        setVideoUrl(videoFile.href);
    }
  }

  function handleThumbnailClick(video) {
    console.log("Thumbnail clicked", video);
    const nasaId = video.data[0].nasa_id;
    fetchVideoUrl(nasaId);
    setSelectedVideo(video);
  }

  function sortVideos(videos, method) {
    if (method === 'new') {
      return [...videos].sort((a, b) => new Date(b.data[0].date_created) - new Date(a.data[0].date_created));
    } else if (method === 'old') {
      return [...videos].sort((a, b) => new Date(a.data[0].date_created) - new Date(b.data[0].date_created));
    }
    return videos;
  }

  return (
      <>
        <BackgroundVideo src={myBgVideo} />
        <Navigation />
        {selectedVideo && (
          <video 
            key={videoUrl} 
            width="720" 
            height="480" 
            controls 
            autoPlay 
            muted
            className='video-player'
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="sort-video-btns-container">
          <button onClick={() => setSortMethod('new')} className="sort-video-btn">Recent</button>
          <button onClick={() => setSortMethod('old')} className="sort-video-btn">Oldest</button>
        </div>
        <div className="videos-container">
        {sortVideos(videos, sortMethod).map((video, index) => (
          <div className="video-item" key={index} onClick={() => handleThumbnailClick(video)}>
              <VideoItem thumbnailUrl={video.links[0].href} />
          </div>
        ))}
        </div>
      </>
  );
}

export default Videos;