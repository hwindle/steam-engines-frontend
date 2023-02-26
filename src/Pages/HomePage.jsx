import React from 'react';
import NavBar from '../components/NavBar';
import EngineContainer from '../components/EngineContainer';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <section>
      <Header title='Steam Engines' />
      <NavBar />
      <EngineContainer />
    </section>
  );
};

export default HomePage;
