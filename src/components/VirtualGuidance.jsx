import InfoImageSection from "./InfoImageSection";
import Guidance from "../assets/guidance.png";

const VirtualGuidance = () => {
    return <InfoImageSection
        title=""
        subtitle="Virtual guidance from home's comfort"
        description="For advice on our range of formulations, we welcome you to book a complimentary live consultation. Following your appointment, you will receive a bespoke product sample when you place an order."
        cta={{ text: "Discover live consultations" }}
        image={Guidance}
        reverse={true}
    />;
};

export default VirtualGuidance;
