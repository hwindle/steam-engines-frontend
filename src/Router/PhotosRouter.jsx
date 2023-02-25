import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './PhotosRouter.css';
/* pages to import */
import HomePage from '../Pages/HomePage';
import ErrorPage from '../Pages/ErrorPage';

const PhotosRouter = () => {
  return (
    <Router>
      {/* navigation */}
      <nav>
        <ul id='top-navigation'>
          <li><Link to='/' data-item='Home'>Home</Link></li>
          {/* <li><Link to='/create' data-item='Find Images'>Find Images</Link></li>
          <li></li> */}
        </ul>
      </nav>

      {/* Different routes/paths for app */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default PhotosRouter;