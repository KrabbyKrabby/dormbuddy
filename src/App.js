import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginCard from './components/LoginCard';
import DormCard from './components/DormCard';
import SearchBar from './components/SearchBar';
import ImageViewer from './components/ImageViewer';
import './index.css';

function App() {
  return (
    <main className="main">
      <Navbar />
      <ImageViewer />
      <Footer />
    </main>
  );
}

export default App;
