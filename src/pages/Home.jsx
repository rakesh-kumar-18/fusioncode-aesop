import Festive from "../components/Festive";
import Header from "../components/Header";
import Hero from "../components/Hero";
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
        </div>
    );
};

export default Home;
