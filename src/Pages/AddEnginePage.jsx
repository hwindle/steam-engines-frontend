import React from 'react';
import NavBar from '../components/NavBar';
import AddUpdateEngineForm from '../components/AddUpdateEngineForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <section>
      <Header title='Add a steam loco' />
      <NavBar />
      <AddUpdateEngineForm />
			<Footer />
    </section>
  );
};

export default HomePage;
