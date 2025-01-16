import Athenaeum from "../components/Athenaeum";
import CoolClimates from "../components/CoolClimates";
import FeatureSection from "../components/FeatureSection";
import Festive from "../components/Festive";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OnlineOffering from "../components/OnlineOffering";
import Products from "../components/Products";
import QuoteSection from "../components/QuoteSection";
import SkinCareSlider from "../components/SkinCareSlider";
import Tokens from "../components/Tokens";
import VirtualGuidance from "../components/VirtualGuidance";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Hero />
            <SkinCareSlider />
            <Festive />
            <Products />
            <Athenaeum />
            <CoolClimates />
            <OnlineOffering />
            <Tokens />
            <VirtualGuidance />
            <QuoteSection />
            <FeatureSection />
            <Footer />
        </div>
    );
};

export default Home;
