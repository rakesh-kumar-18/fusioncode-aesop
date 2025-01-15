const Header = () => {
    return (
        <header className="bg-black text-white">
            {/* Main Navigation */}
            <div className="bg-neutral-50 text-black px-8 py-6 flex justify-between items-center">
                {/* Left Navigation Links */}
                <nav className="flex space-x-6 text-sm font-semibold">
                    <a href="#" className="hover:underline">
                        New & Notable
                    </a>
                    <a href="#" className="hover:underline">
                        Skin Care
                    </a>
                    <a href="#" className="hover:underline">
                        Hand & Body
                    </a>
                    <a href="#" className="hover:underline">
                        Home
                    </a>
                    <a href="#" className="hover:underline">
                        Hair
                    </a>
                    <a href="#" className="hover:underline">
                        Fragrance
                    </a>
                    <a href="#" className="hover:underline">
                        Kits & Travel
                    </a>
                    <a href="#" className="hover:underline">
                        Gifts
                    </a>
                    <a href="#" className="hover:underline">
                        Read
                    </a>
                    <a href="#" className="hover:underline">
                        Stores
                    </a>
                    <a href="#" className="hover:underline">
                        Facial Appointments
                    </a>
                    <button className="hover:underline">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                            />
                        </svg>
                    </button>
                </nav>
                {/* Right Navigation Links */}
                <div className="flex space-x-6 text-sm font-semibold">
                    <a href="#" className="hover:underline">
                        Log in
                    </a>
                    <a href="#" className="hover:underline">
                        Cabinet
                    </a>
                    <a href="#" className="hover:underline">
                        Cart
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
