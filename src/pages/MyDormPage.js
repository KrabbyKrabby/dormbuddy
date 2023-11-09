import Navbar from "../components/Navbar";
import "./CSS/MyDormPage.css";
import DormData from '../DormData';
import DormCard from '../components/DormCard';
export default function MyDormPage(props)
{


    const Cards = DormData.map((dorm) => {
        return (
            props.personEmail === dorm.userEmail && <DormCard 
                item = {dorm}
                {...props}
            />
        );
    });


    return(
        <main className="mainListings">
            <Navbar {...props}/>
            <h1 className="dormPageTitle">My Dorm Listings</h1>
            <div className="MyDormCards">
                {Cards}
            </div>

        </main>
    );
}