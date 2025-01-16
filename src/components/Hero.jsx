import Carousel1 from "../assets/carousel1.jpg";
import Carousel2 from "../assets/carousel2.webp";
import Carousel3 from "../assets/carousel3.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
    const slides = [
        {
            id: 1,
            title: "Resurgent beginnings",
            description:
                "This new year, wishes for revitalised energy take form in a curated collection of gifts for family and close companions. Receive complimentary red envelopes with purchases over HKD 900 by entering NY25 at checkout.",
            buttonText: "Explore seasonal gifts",
            image: Carousel1,
        },
        {
            id: 2,
            title: "Brilliant performers",
            description:
                "Immaculate Facial Tonic and Lucent Facial Concentrate: applied in sequence, these vitamin-rich formulations leave the skin refined, balanced and hydrated.",
            buttonText: "Discover the duo",
            image: Carousel2,
        },
        {
            id: 3,
            title: "Four bundles for hair, hands and home",
            description:
                "The Home Necessities Duo, Adventurer Hand Care Trio, Basin Essentials and Hair Care Duo are arranged in a gift box suitable for sending directly to recipients. Available exclusively on aesop.com.",
            buttonText: "Explore bundles",
            image: Carousel3,
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Move to the next slide
    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    // Move to the previous slide
    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Toggle play/pause
    const handlePause = () => {
        setIsPaused(!isPaused);
    };

    // Auto-slide Logic
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPaused, currentSlide]);

    return (
        <div className="relative bg-neutral-50 text-black">
            {/* Carousel Wrapper */}
            <div className="relative h-screen overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 flex items-center justify-between px-8 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    >
                        {/* Text Content */}
                        <div className="max-w-lg space-y-4">
                            <h2 className="text-4xl font-bold">{slide.title}</h2>
                            <p className="text-lg">{slide.description}</p>
                            <button className="mt-4 px-6 py-3 border border-black rounded-md hover:bg-black hover:text-white">
                                {slide.buttonText}
                            </button>
                        </div>
                        {/* Image */}
                        <div className="flex-1">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 text-gray-600 z-10">
                {/* Previous Button */}
                <button
                    onClick={handlePrev}
                    className="p-2 hover:text-black transition-colors cursor-pointer"
                    aria-label="Previous Slide"
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

                {/* Slide Counter */}
                <div className="text-sm">
                    {currentSlide + 1} / {slides.length}
                </div>

                {/* Play/Pause Button */}
                <button
                    onClick={handlePause}
                    className="p-2 hover:text-black transition-colors cursor-pointer"
                    aria-label={isPaused ? "Play" : "Pause"}
                >
                    {isPaused ? (
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
                                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                            />
                        </svg>
                    ) : (
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
                                d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                            />
                        </svg>
                    )}
                </button>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className="p-2 hover:text-black transition-colors cursor-pointer"
                    aria-label="Next Slide"
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
        </div>
    );
};

export default Hero;
