
import React from 'react';
import Header from './components/Header';
import VideoSection from './components/VideoSection';
import Courses from './components/Courses';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <VideoSection />
      <Courses />
      <Footer />
    </div>
  );
};

export default App;
