import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import DormCard from '../components/DormCard';
import DormData from '../DormData';
import './CSS/SearchPage.css';

export default function Homepage() {

    const Cards = DormData.map((dorm) => {
        return (
            <DormCard 
                item = {dorm}
            />
        );
    });

    return (
        <main className="main">
            <Navbar />
            <SearchBar />

            <div className='cardContainer'>
                {Cards}
            </div>
            

            <Footer />
        </main>
    );
}