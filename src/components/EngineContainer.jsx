import { useState, useEffect } from 'react';
import axios from 'axios';
import SmallPhotoCard from './SmallPhotoCard';

const EngineContainer = () => {
  const [update, setUpdate] = useState(false);

  const childToParent = (childData) => {
    setUpdate(childData);
  };
  // useEffect
  const [locoData, setLocoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const res = await axios('http://localhost:3050/allEngines');
        //console.dir(res.data);
        setLocoData(res.data);
      } catch (error) {
        console.log('Error from search engines fetch', error);
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
        ? locoData?.map((item, i) => {
            return <SmallPhotoCard photo={item} id={i} 
            childToParent={childToParent} />;
          })
        : ''}
    </section>
  );
};

export default EngineContainer;
