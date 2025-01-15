import InfoImageSection from "./InfoImageSection";
import FestiveImage from "../assets/festive.jpg";

const Festive = () => {
    return <InfoImageSection
        title="Festive Giving"
        subtitle="A complimentary sleeve for your gifts"
        description="Inspired by the verve of the season, a specially designed gift sleeve will swaddle your purchases when you select the ‘gift packaging’ option at checkout. Exclusions apply."
        cta={{ text: "Explore gifts" }}
        image={FestiveImage}
        reverse={false}
    />;
};

export default Festive;
