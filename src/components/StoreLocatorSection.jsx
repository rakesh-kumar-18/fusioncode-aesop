import { useState } from "react";
import StoreImage1 from "../assets/store1.png";
import StoreImage2 from "../assets/store2.png";
import StoreImage3 from "../assets/store3.png";

const StoreLocatorSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const storeLocatorData = {
        title: "Store Locator",
        description:
            "Our consultants are available to host you in-store and provide tailored guidance on gift purchases.",
        cta: { text: "Find a nearby store" },
        images: [StoreImage1, StoreImage2, StoreImage3],
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === storeLocatorData.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? storeLocatorData.images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="flex flex-col md:flex-row items-center py-10 bg-neutral-50">
            {/* Text Section */}
            <div className="flex-1 px-6 space-y-4">
                <h2 className="text-3xl font-bold">{storeLocatorData.title}</h2>
                <p className="text-lg text-gray-700">{storeLocatorData.description}</p>
                {storeLocatorData.cta && (
                    <button className="mt-4 px-6 py-3 border border-black rounded-md hover:bg-black hover:text-white">
                        {storeLocatorData.cta.text} →
                    </button>
                )}
            </div>

            {/* Slider Section */}
            <div className="flex-1 px-6 relative group">
                {/* Images */}
                <div className="relative overflow-hidden w-full h-96 rounded-md">
                    {storeLocatorData.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Store image ${index + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                                }`}
                        />
                    ))}
                </div>

                {/* Navigation Controls */}
                <div className="absolute inset-0 flex justify-between items-center px-4 group-hover:opacity-100 opacity-0 transition-opacity duration-300 z-10">
                    <button
                        onClick={handlePrev}
                        className="bg-black text-white p-2 rounded-full"
                        aria-label="Previous"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5 8.25 12l7.5-7.5"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-black text-white p-2 rounded-full"
                        aria-label="Next"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                </div>

                {/* Linear Slider */}
                <div className="relative mt-4 h-px bg-gray-200">
                    <div
                        className="absolute top-0 left-0 h-full bg-black transition-all duration-500"
                        style={{
                            width: `${100 / 3}%`,
                            transform: `translateX(${currentIndex * 99.96}%)`,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default StoreLocatorSection;
