const FeatureSection = () => {
    const features = [
        {
            title: "Certified B Corp",
            description:
                "We meet the highest verified standards of social and environmental performance, transparency and accountability.",
        },
        {
            title: "Leaping Bunny approved",
            description:
                "Our formulations are approved as cruelty free under the Cruelty Free International Leaping Bunny programme.",
        },
        {
            title: "PETA recognition",
            description:
                "We appear on PETA's internationally recognised vegan and cruelty-free lists.",
        },
    ];

    return (
        <div className="bg-neutral-50 py-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {features.map((feature, index) => (
                    <div key={index}>
                        <h3 className="text-lg font-semibold text-black">{feature.title}</h3>
                        <p className="text-sm text-gray-600 mt-4">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureSection;
