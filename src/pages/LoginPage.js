import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginCard from '../components/LoginCard';
import './CSS/LoginPage.css';

export default function LoginPage(props) {
    return (
        <main className="main">
            <Navbar {...props}/>
            <LoginCard {...props}/>
            <Footer />
        </main>
    );
}