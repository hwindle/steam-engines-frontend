import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './PhotosRouter.css';
/* pages to import */
import HomePage from '../Pages/HomePage';
import ErrorPage from '../Pages/ErrorPage';

const PhotosRouter = () => {
  return (
    <Router>
      

      {/* Different routes/paths for app */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default PhotosRouter;