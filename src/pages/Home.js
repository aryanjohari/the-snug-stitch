import HomeCarousel from "../components/HomeCarousel";
import HeroSection from "../components/HeroSection";
import '../styles.css';
import SubscribePopup from "../components/PopupFrom";




export const Home = () => {
    return(
        <div>
            <HomeCarousel/>
            <HeroSection/>
            <SubscribePopup/>
        </div>
    )
}