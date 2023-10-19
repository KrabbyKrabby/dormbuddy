import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginCard from './components/LoginCard';
import './index.css';

function App() {
  return (
    <main className="main">
      <Navbar />
      <LoginCard />
      <Footer />
    </main>
  );
}

export default App;
