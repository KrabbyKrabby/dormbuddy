import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignupCard from '../components/SignupCard';
import './CSS/LoginPage.css';

export default function Homepage() {
    return (
        <main className="main">
            <Navbar />
            <SignupCard />
            <Footer />
        </main>
    );
}