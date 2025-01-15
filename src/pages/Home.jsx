import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header Section */}
            <Header />
            <Hero />
        </div>
    );
};

export default Home;
