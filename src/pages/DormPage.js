import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginCard from '../components/LoginCard';
import SearchBar from '../components/SearchBar';
import ImageViewer from '../components/ImageViewer';
import './CSS/DormPage.css';

export default function DormPage() {
    return (
        <main className="main">
            <Navbar />
            <SearchBar />
            <ImageViewer />
            <Footer />
        </main>
    );
}