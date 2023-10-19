import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginCard from '../components/LoginCard';
import './CSS/LoginPage.css';

export default function Homepage() {
    return (
        <main className="main">
            <Navbar />
            <LoginCard />
            <Footer />
        </main>
    );
}