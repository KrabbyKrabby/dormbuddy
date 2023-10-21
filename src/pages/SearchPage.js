import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import DormCard from '../components/DormCard';
import './CSS/SearchPage.css';

export default function Homepage() {
    return (
        <main className="main">
            <Navbar />
            <SearchBar />

            <div className='cardContainer'>
                <DormCard />
                <DormCard />
                <DormCard />
                <DormCard />
                <DormCard />
            </div>
            

            <Footer />
        </main>
    );
}