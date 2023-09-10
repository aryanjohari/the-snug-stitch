import HomeCarousel from "../components/HomeCarousel";
import HeroSection from "../components/HeroSection";
import "../styles.css";

export const Home = () => {
  return (
    <div>
      {/* <LoadingScreen />
      <SubscribePopup /> */}
      <HomeCarousel />
      <HeroSection />
    </div>
  );
};
