import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import Profiles from "../ProfileData.js"
import "./CSS/AboutPage.css";
export default function(){

    const ProfileCards = Profiles.map((profile) => {
        return (
            <ProfileCard 
                item = {profile}
            />
        );
    });

    return(
        <main>
            <Navbar/>
            <div className="profileContainer">
                {ProfileCards}
            </div>
            <Footer/>
        </main>
        
    );
}