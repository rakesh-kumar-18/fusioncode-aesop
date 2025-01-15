import ProductSlider from "./ProductSlider";
import Parsley from "../assets/parsley.png";
import Camellia from "../assets/camellia.png";
import Elemental from "../assets/elemental.png";
import Fabulous from "../assets/fabulous.png";
import Damascan from "../assets/damascan.png";

const items = {
    info: {
        title: "For cool climates",
        subtitle: "Adjusting to seasonal change",
        description:
            "In the cooler months, water loss from the skin is increased due to low humidity and wind exposure. Select skin care formulations that assist in protecting its delicate surface.",
    },
    products: [
        {
            image: Parsley,
            title: "Parsley Seed Anti - Oxidant Intense Serum",
            description: "A hydrating serum to bolster skin",
        },
        {
            image: Camellia,
            title: "Camellia Nut Facial Hydrating Cream",
            description: "For normal, dry or sensitive skin",
        },
        {
            image: Elemental,
            title: "Elemental Facial Barrier Cream",
            description: "For dry and sensitive skin in cold climates",
        },
        {
            image: Fabulous,
            title: "Fabulous Face Oil",
            description: "For normal, dull and congested skin",
        },
        {
            image: Damascan,
            title: "Damascan Rose Facial Treatment",
            description: "Leaves skin feeling supple, nourished",
        },
    ],
};

const CoolClimates = () => {
    return <ProductSlider items={items} showInfo={true} />;
};

export default CoolClimates;
