import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignupCard from '../components/SignupCard';
import './CSS/LoginPage.css';

export default function SignupPage(props) {
    return (
        <main className="main">
            <Navbar {...props}/>
            <SignupCard {...props}/>
            <Footer />
        </main>
    );
}