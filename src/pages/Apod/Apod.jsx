import { useEffect, useState } from 'react';

import Navigation from '../../components/Navigation/Navigation'

import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo';
import myVideo from '../../assets/background_video/earth.mp4';

import './Apod.css'

function Apod() {

    const [apodData, setApodData] = useState({});

    useEffect(() => {

        const apikey= 'LB2QtQMewzzjzfoCOM8488BPyd0FXGu3Xx6txVZO';
        const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${apikey}`;
        
        // const apodUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

        const ApodApiCall = async () => {
          const res = await fetch(apodUrl);
          const jsonData = await res.json();
        //   console.log(jsonData);
        setApodData(jsonData);
        };
      
        ApodApiCall();
      }, []);

      return (
        <>
            <BackgroundVideo src={myVideo} />
            <Navigation />

            {apodData && (
                <div className="apod-container">
                    <img src={apodData.url} className="apodImage" alt={apodData.title} />
                    <div className="apodText">
                        <h1>{apodData.title}</h1>
                        <p>{apodData.explanation}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Apod