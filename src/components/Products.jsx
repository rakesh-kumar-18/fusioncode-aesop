import ProductSlider from "./ProductSlider";
import Reverence from "../assets/reverence.png";
import Geranium from "../assets/geranium.png";
import Screen from "../assets/screen1.png";
import Virere from "../assets/virere.png";
import Aromatique from "../assets/aromatique.png";
import Callippus from "../assets/callippus.png";

const items = {
    products: [
        {
            image: Reverence,
            title: "Reverence Aromatique Hand Wash",
            description: "A gently exfoliating formulation",
        },
        {
            image: Geranium,
            title: "Geranium Leaf Body Scrub",
            description: "Leaves skin feeling fresh, smooth and soft",
        },
        {
            image: Screen,
            title: "Screen 1",
            description: "A quartet of staples for the hands, body and home",
        },
        {
            image: Virere,
            title: "Virēre Eau de Parfum",
            description: "Citrus, green, woody",
        },
        {
            image: Aromatique,
            title: "States of Being: Aromatique Room Spray Trio",
            description: "An evocative trio for any interior",
        },
        {
            image: Callippus,
            title: "Callippus Aromatique Candle",
            description: "A marriage of deep greens and earthy spices",
        },
    ],
};

const Products = () => {
    return <ProductSlider items={items} showInfo={false} />;
};

export default Products;
