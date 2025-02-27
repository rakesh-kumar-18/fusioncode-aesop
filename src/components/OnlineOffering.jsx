import InfoImageSection from "./InfoImageSection";
import Gesture from "../assets/gesture.mp4";

const OnlineOffering = () => {
    return <InfoImageSection
        title="Our online offering"
        subtitle="Gestures to enhance your experience"
        description="Discover a suite of complimentary additions available with every order, including curated product samples, gift wrapping in our signature cotton bag and personalised gift messaging."
        cta={{ text: "Explore our online offering" }}
        video={Gesture}
        reverse={false}
    />;
};

export default OnlineOffering;
