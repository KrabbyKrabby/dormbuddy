import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginCard from '../components/LoginCard';
import './CSS/LoginPage.css';

import axios from 'axios';
import React from 'react';

const getURL = "https://tourismpracticespring-production.up.railway.app/api/v1/tourism"
const postURL = "https://tourismpracticespring-production.up.railway.app/api/v1/tourism/add"

export default function LoginPage(props) {


    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(getURL).then((response) => {
            setPost(response.data);
        })
            .catch((err) => {
                console.log(err);
            })
    });

    function createPost() {
        axios.post(postURL, {
            spotName: "go right fn",
            openingDate: "2021-01-01",
            closingDate: "2021-12-31",
            description: "no no ",
            location: "France"
        })
            .then((response) => {
                setPost(response.data);
            });
    }

    return (
        <main className="main">
            <Navbar {...props} />
            <h1>{JSON.stringify(post)}</h1>
            <button onClick={createPost}>Submit</button>
            <LoginCard {...props} />
            <Footer />
        </main>
    );
}