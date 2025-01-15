import InfoImageSection from "./InfoImageSection";
import TokensImage from "../assets/tokens.png";

const Tokens = () => {
    return <InfoImageSection
        title="Tokens of appreciation"
        subtitle="Corporate gifts"
        description="Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery."
        cta={{ text: "Learn more about this service" }}
        image={TokensImage}
        reverse={true}
    />;
};

export default Tokens;
