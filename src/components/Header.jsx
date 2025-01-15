const Header = () => {
    return (
        <header className="bg-black text-white">
            <div className="bg-neutral-50 text-black flex justify-between items-center px-4 py-2">
                <nav className="flex space-x-6">
                    <a href="#" className="hover:underline">
                        Shop
                    </a>
                    <a href="#" className="hover:underline">
                        Read
                    </a>
                    <a href="#" className="hover:underline">
                        Stores
                    </a>
                </nav>
                <div className="flex space-x-6">
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
