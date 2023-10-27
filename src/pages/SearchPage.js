import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import DormCard from '../components/DormCard';
import DormData from '../DormData';
import './CSS/SearchPage.css';

export default function SearchPage(props) {

    const Cards = DormData.map((dorm) => {
        return (
            <DormCard 
                item = {dorm}
                {...props}
            />
        );
    });

    return (
        <main className="main">
            <Navbar {...props}/>
            <SearchBar {...props}/>

            <div className='cardContainer'>
                {Cards}
            </div>
            

            <Footer />
        </main>
    );
}