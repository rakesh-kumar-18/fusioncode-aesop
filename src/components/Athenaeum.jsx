import InfoImageSection from "./InfoImageSection";
import AthenaeumImage from "../assets/athenaeum.png";

const Athenaeum = () => {
    return <InfoImageSection
        title="The Athenaeum"
        subtitle="Skin care protagonists: Vitamin C"
        description="In this series, we take a closer look at some of the ingredients that we’ve returned to time and again, beginning with anti-oxidant-rich Vitamin C."
        cta={{ text: "Continue reading" }}
        image={AthenaeumImage}
        reverse={true}
    />;
};

export default Athenaeum;
