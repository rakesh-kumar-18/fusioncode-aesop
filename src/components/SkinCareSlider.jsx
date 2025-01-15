import ProductSlider from "./ProductSlider";
import Brilliant from "../assets/briliant.png";
import Lucent from "../assets/lucent.png";
import Immaculate from "../assets/immaculate.png";
import Btriplec from "../assets/btriplec.png";
import Exalted from "../assets/exalted.png";
import PerfectFacial from "../assets/perfectfacial.png";
import Sublime from "../assets/sublime.png";

const items = {
    info: {
        title: "Skin Care+",
        subtitle: "Intensive formulations for complex skin",
        description:
            "Explore products formulated with mature skin and urban dwellers in mind, to provide daily hydration and the additional benefit of potent vitamins and anti-oxidants.",
        cta: { text: "Browse formulations" },
    },
    products: [
        {
            image: Brilliant,
            title: "Brilliant Performers Duo",
            description: "Synchronised support to refine and replenish the skin",
        },
        {
            image: Lucent,
            title: "Lucent Facial Concentrate",
            description: "A Vitamin C-rich layering serum",
        },
        {
            image: Immaculate,
            title: "Immaculate Facial Tonic",
            description: "Exfoliating tonic with a light finish",
        },
        {
            image: Btriplec,
            title: "B Triple C Facial Balancing Gel",
            description: "Embracing, vitamin-rich hydration",
        },
        {
            image: Exalted,
            title: "Exalted Eye Serum",
            description: "Lightweight, vitamin-rich serum",
        },
        {
            image: PerfectFacial,
            title: "Perfect Facial Hydrating Cream",
            description: "Sumptuous, replenishing, matte finish",
        },
        {
            image: Sublime,
            title: "Sublime Replenishing Night Masque",
            description: "Richly nourishing hydration for overnight use",
        },
    ],
};

const SkinCareSlider = () => {
    return <ProductSlider items={items} showInfo={true} />;
};

export default SkinCareSlider;
