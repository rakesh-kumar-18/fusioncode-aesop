/* eslint-disable react/prop-types */
import { useState } from "react";

const ProductSlider = ({ items, showInfo }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < items.products.length - (showInfo ? 2 : 3)) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="relative bg-neutral-50 text-black p-10 overflow-hidden">
            {/* Slider Content */}
            <div
                className="flex transition-transform duration-500"
                style={{
                    transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                }}
            >
                {/* Info Section as part of sliding container */}
                {
                    showInfo && (
                        <div className="w-1/3 flex-shrink-0 px-8">
                            <div className="max-w-lg space-y-4">
                                <h2 className="text-sm font-semibold uppercase">{items.info.title}</h2>
                                <h3 className="text-3xl font-bold">{items.info.subtitle}</h3>
                                <p className="text-lg">{items.info.description}</p>
                                {items.info.cta && (
                                    <button className="mt-4 px-6 py-3 border border-black rounded-md hover:bg-black hover:text-white">
                                        {items.info.cta.text} →
                                    </button>
                                )}
                            </div>
                        </div>
                    )
                }

                {/* Product Section */}
                {items.products.map((product, idx) => (
                    <div
                        key={idx}
                        className="w-1/3 flex-shrink-0 px-8 flex flex-col items-center"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-48 object-contain"
                        />
                        <div className="mt-4 text-center">
                            <h4 className="text-lg font-semibold">{product.title}</h4>
                            <p className="text-sm text-gray-600">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-y-0 left-0 flex items-center">
                {currentIndex > 0 && (
                    <button
                        onClick={handlePrev}
                        className="p-2 bg-black text-white rounded-full shadow-lg"
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
                )}
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
                {currentIndex < items.products.length - (showInfo ? 2 : 3) && (
                    <button
                        onClick={handleNext}
                        className="p-2 bg-black text-white rounded-full shadow-lg"
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
                )}
            </div>

            {/* Linear Slider Indicator */}
            <div className="relative mt-4 h-px bg-gray-200">
                <div
                    className="absolute top-0 left-0 h-full bg-black transition-all duration-500"
                    style={{
                        width: `${100 / (items.products.length - (showInfo ? 1 : 2))}%`,
                        transform: `translateX(${currentIndex * 99.96}%)`,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default ProductSlider;
