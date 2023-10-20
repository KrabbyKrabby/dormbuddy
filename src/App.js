import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginCard from './components/LoginCard';
import DormCard from './components/DormCard';
import SearchBar from './components/SearchBar';
import './index.css';

function App() {
  return (
    <main className="main">
      <Navbar />
      <SearchBar />
      <div className='temp'>
        <DormCard/>
        <DormCard/>
        <DormCard/>
        <DormCard/>
      </div>
      <Footer />
    </main>
  );
}

export default App;
