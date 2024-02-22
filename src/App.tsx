// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import AboutPage from './pages/AboutPage';
import Header from './components/layout/Header';

// 404 not found page support

// add SinglePostPage.tsx to routes
// /pages/1
// /pages/2
// /pages/15

export default function App() {
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/posts' element={<PostsPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </div>
  );
}
