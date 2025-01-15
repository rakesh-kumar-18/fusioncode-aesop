import Athenaeum from "../components/Athenaeum";
import CoolClimates from "../components/CoolClimates";
import Festive from "../components/Festive";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OnlineOffering from "../components/OnlineOffering";
import Products from "../components/Products";
import SkinCareSlider from "../components/SkinCareSlider";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header Section */}
            <Header />
            <Hero />
            <SkinCareSlider />
            <Festive />
            <Products />
            <Athenaeum />
            <CoolClimates />
            <OnlineOffering />
        </div>
    );
};

export default Home;
