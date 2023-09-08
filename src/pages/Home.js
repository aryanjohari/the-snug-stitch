import HomeCarousel from "../components/HomeCarousel";
import HeroSection from "../components/HeroSection";
import "../styles.css";
import LoadingScreen from "../components/LoadingScreen";
import SubscribePopup from "../components/PopupFrom"

export const Home = () => {
  return (
    <div>
      <LoadingScreen />
      <SubscribePopup />
      <HomeCarousel />
      <HeroSection />
    </div>
  );
};
