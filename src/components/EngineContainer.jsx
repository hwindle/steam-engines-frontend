import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SmallPhotoCard from './SmallPhotoCard';

const EngineContainer = () => {
  const [imageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const res = await axios('http://localhost:3050/allEngines');
        //console.dir(res.data);
        setImageData(res.data);
      } catch (error) {
        console.log('Error from search Images fetch', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading
        ? imageData?.map((item, i) => {
            return <SmallPhotoCard photo={item} id={i} />;
          })
        : ''}
    </section>
  );
};

export default EngineContainer;
