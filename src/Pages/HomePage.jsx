import React from 'react';
import NavBar from '../components/NavBar';
import EngineContainer from '../components/Engines/EngineContainer';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <section>
      <Header title='Steam Engines' />
      <NavBar />
      <EngineContainer />
			<Footer />
    </section>
  );
};

export default HomePage;
