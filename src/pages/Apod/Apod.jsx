import { useEffect, useState } from 'react';

import Navigation from '../../components/Navigation/Navigation'

function Apod() {

    const [apodData, setApodData] = useState({});

    useEffect(() => {

        const apikey= 'LB2QtQMewzzjzfoCOM8488BPyd0FXGu3Xx6txVZO';
        const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${apikey}`;
        
        // const apodUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

        const makeApiCall = async () => {
          const res = await fetch(apodUrl);
          const jsonData = await res.json();
        //   console.log(jsonData);
        setApodData(jsonData);
        };
      
        makeApiCall();
      }, []);

      return (
        <>
            <Navigation />
            {apodData && (
                <div>
                    <h1>{apodData.title}</h1>
                    <img src={apodData.url} className="apodImage" />
                    <p>{apodData.explanation}</p>
                </div>
            )}
        </>
    );
}

export default Apod