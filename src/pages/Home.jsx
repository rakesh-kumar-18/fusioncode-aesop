import Header from "../components/Header";
import Hero from "../components/Hero";
import SkinCareSlider from "../components/SkinCareSlider";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header Section */}
            <Header />
            <Hero />
            <SkinCareSlider />
        </div>
    );
};

export default Home;
