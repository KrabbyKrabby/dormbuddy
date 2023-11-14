import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import SearchPage from './pages/SearchPage'
import Homepage from './pages/Homepage';
import DormPage from './pages/DormPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

