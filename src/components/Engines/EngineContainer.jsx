import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import SmallPhotoCard from './SmallPhotoCard';
import { ContextUpdate } from './EngineContext';

const EngineContainer = () => {
  // useEffect
  const [locoData, setLocoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // use the context for getting the parent to rerender
  // uses useMemo to prevent extra rerenders
  const [updateEngines, setUpdateEngines] = useState(false);
  const contextValue = useMemo(
    () => ({ updateEngines, setUpdateEngines }), 
    [updateEngines]
  );
  

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
    <ContextUpdate.Provider value={contextValue}>
      <section>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading
          ? locoData?.map((item, i) => {
              return (
                <SmallPhotoCard
                  photo={item}
                  id={i}
                />
              );
            })
          : ''}
      </section>
    </ContextUpdate.Provider>
  );
};

export default EngineContainer;
