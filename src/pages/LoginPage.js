import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginCard from '../components/LoginCard';
import './CSS/LoginPage.css';

import axios from 'axios';
import React from 'react';

const getURL = "https://tourismpracticespring-production.up.railway.app/api/v1/tourism"
const postURL = "http://localhost:8080/api/v1/auth/user/login"

export default function LoginPage(props) {


    const [post, setPost] = React.useState(null);
    return (
        <main className="main">
            <Navbar {...props} />
            <LoginCard {...props} />
            <Footer />
        </main>
    );
}