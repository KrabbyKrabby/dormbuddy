import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginCard from '../components/LoginCard';
import './CSS/LoginPage.css';

import axios from 'axios';
import React from 'react';

const baseURL = "https://api.imgflip.com/get_memes"

export default function LoginPage(props) {


    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
                setPost(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    });

    return (
        <main className="main">
            <Navbar {...props}/>
            <h1>{JSON.stringify(post)}</h1>
            <LoginCard {...props}/>
            <Footer />
        </main>
    );
}