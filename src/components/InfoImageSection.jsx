/* eslint-disable react/prop-types */
const InfoImageSection = ({
    title,
    subtitle,
    description,
    cta,
    image,
    video, // Add video prop
    reverse = false,
}) => {
    return (
        <div
            className={`flex flex-col md:flex-row items-center py-10 ${reverse ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* Text Section */}
            <div className="flex-1 px-6 space-y-4">
                <h2 className="text-sm font-semibold text-gray-600">{title}</h2>
                <h3 className="text-3xl font-bold text-gray-900">{subtitle}</h3>
                <p className="text-lg text-gray-700">{description}</p>
                {cta && (
                    <button className="mt-4 px-6 py-3 border border-black rounded-md hover:bg-black hover:text-white">
                        {cta.text} →
                    </button>
                )}
            </div>

            {/* Media Section (Image or Video) */}
            <div className="flex-1 px-6">
                {video ? (
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto object-cover"
                    >
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src={image}
                        alt={subtitle}
                        className="w-full h-auto object-cover"
                    />
                )}
            </div>
        </div>
    );
};

export default InfoImageSection;
