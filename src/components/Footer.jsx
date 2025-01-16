const Footer = () => {
    return (
        <footer className="bg-black text-white">
            {/* Main Footer Content */}
            <div className="py-10">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Subscribe Section */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-sm font-semibold uppercase mb-4">
                            Subscribe to Aesop communications
                        </h4>
                        <div className="border-b border-gray-700 mb-4">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-black text-white w-full py-2 focus:outline-none placeholder-gray-500"
                            />
                        </div>
                        <div className="flex items-start space-x-2">
                            <input
                                type="checkbox"
                                id="subscribe"
                                className="mt-1"
                            />
                            <label
                                htmlFor="subscribe"
                                className="text-sm text-gray-400"
                            >
                                Subscribe to receive communications from Aesop. By subscribing, you
                                confirm you have read and understood our{" "}
                                <a href="#" className="underline">
                                    privacy policy
                                </a>
                                .
                            </label>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="space-y-8">
                        <h4 className="text-sm font-semibold uppercase">
                            Orders and support
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:underline">Contact us</a></li>
                            <li><a href="#" className="hover:underline">FAQs</a></li>
                            <li><a href="#" className="hover:underline">Shipping</a></li>
                            <li><a href="#" className="hover:underline">Returns</a></li>
                            <li><a href="#" className="hover:underline">Order history</a></li>
                            <li><a href="#" className="hover:underline">Check gift card balance</a></li>
                            <li><a href="#" className="hover:underline">Terms and conditions</a></li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-sm font-semibold uppercase">
                            Services
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:underline">Live assistance</a></li>
                            <li><a href="#" className="hover:underline">Corporate gifts</a></li>
                            <li><a href="#" className="hover:underline">Facial Appointments</a></li>
                            <li><a href="#" className="hover:underline">Click and Collect</a></li>
                            <li><a href="#" className="hover:underline">Video consultation</a></li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-sm font-semibold uppercase">
                            Location preferences
                        </h4>
                        <div>
                            <p className="text-sm text-gray-400">
                                Shipping:{" "}
                                <a href="#" className="underline">
                                    Hong Kong, SAR
                                </a>
                            </p>
                            <p className="text-sm text-gray-400">
                                Language:{" "}
                                <a href="#" className="underline">
                                    English
                                </a>{" "}
                                |{" "}
                                <a href="#" className="underline">
                                    繁體中文
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sustainability Section */}
            <div className="border-t border-gray-700 mt-10 pt-10">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-sm font-semibold uppercase mb-4">
                            Sustainability
                        </h4>
                        <p className="text-sm text-gray-400">
                            All Aesop products are vegan, and we do not test our formulations or
                            ingredients on animals. We are Leaping Bunny approved and a Certified B
                            Corporation.{" "}
                            <a href="#" className="underline">
                                Learn more
                            </a>
                            .
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-sm font-semibold uppercase">
                            About
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:underline">Our story</a></li>
                            <li><a href="#" className="hover:underline">Foundation</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Privacy policy</a></li>
                            <li><a href="#" className="hover:underline">Accessibility</a></li>
                            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-sm font-semibold uppercase">
                            Social media
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                            <li><a href="#" className="hover:underline">Twitter</a></li>
                            <li><a href="#" className="hover:underline">LinkedIn</a></li>
                            <li><a href="#" className="hover:underline">WeChat</a></li>
                            <li><a href="#" className="hover:underline">Weibo</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-700 mt-10 py-4">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-sm text-gray-400">
                    <span>© Aesop</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
