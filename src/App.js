import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './index.css';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SearchPage from './pages/SearchPage';
import DormPage from './pages/DormPage';

function App() {

  

  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/signup" element={<SignupPage />}/>
      <Route path="/search" element={<SearchPage />}/>
      <Route path="/dorm" element={<DormPage />}/>
    </Routes>
  );
}

export default App;
