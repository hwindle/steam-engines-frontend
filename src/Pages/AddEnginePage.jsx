import React from 'react';
import NavBar from '../components/NavBar';
import AddEngineForm from '../components/AddEngineForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <section>
      <Header title='Steam Engines' />
      <NavBar />
      <AddEngineForm />
			<Footer />
    </section>
  );
};

export default HomePage;
