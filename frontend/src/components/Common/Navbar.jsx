import { Link } from "react-router-dom"
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2"
import SearchBar from "./SearchBar"
import CartDrawer from "../Layout/CartDrawer"
import { useCallback, useEffect, useRef, useState } from "react"
import { IoMdClose } from "react-icons/io"

const Navbar = () => {
    const [drawer, setDreawer] = useState(false);
    const [mobileDrawer, setMobileDrawer] = useState(false);
    const mobileNavRef = useRef(null);

    const toggleMobileDrawer = useCallback(() => setMobileDrawer(!mobileDrawer), [mobileDrawer])

    const toggleDrawer = () => setDreawer(!drawer)

    useEffect(() => {
        if (!mobileDrawer) return

        const handleClickOutside = (event) => {
            if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) toggleMobileDrawer();
        }

        const timer = setTimeout(() => {
            document.addEventListener('mousedown', handleClickOutside);
        }, 100)

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [mobileDrawer, toggleMobileDrawer])

    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Left Side */}
                <div>
                    <Link to="/"
                        className="text-2xl font-medium text-primary-text-light dark:text-primary-text-dark"
                    >Trendora</Link>
                </div>

                {/* Center Side */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <Link to="/" className="text-primary-text-light hover:text-black text-sm font-medium uppercase transition-all duration-300 ease-in-out">Men</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-primary-text-light hover:text-black text-sm font-medium uppercase transition-all duration-300 ease-in-out">Women</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-primary-text-light hover:text-black text-sm font-medium uppercase transition-all duration-300 ease-in-out">Top Wear</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-primary-text-light hover:text-black text-sm font-medium uppercase transition-all duration-300 ease-in-out">Bottom Wear</Link>
                    </li>
                </ul>

                {/* Right Side */}
                <div className="flex items-center space-x-4">
                    <Link to={'/profile'} className="text-primary-text-light hover:text-black text-sm font-medium transition-all duration-300 ease-in-out">
                        <HiOutlineUser className="w-5 h-5 text-gray-700" />
                    </Link>
                    <button onClick={toggleDrawer} className="relative text-primary-text-light hover:text-black text-sm font-medium transition-all duration-300 ease-in-out">
                        <HiOutlineShoppingBag className="w-5 h-5 text-gray-700" />
                        <span className="absolute bg-primary-bg-light dark:bg-primary-bg-dark text-primary-text-light dark:text-primary-text-dark rounded-full text-xs w-5 h-5 flex items-center justify-center -top-2 -right-2">0</span>
                    </button>

                    <div className="overflow-hidden">
                        <SearchBar />
                    </div>
                    <button className="md:hidden" onClick={toggleMobileDrawer}>
                        <HiBars3BottomRight className="w-5 h-5 text-gray-700" />
                    </button>
                </div>
            </nav>
            <CartDrawer drawerOpen={drawer} toggleDrawer={toggleDrawer} />

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-primary-bg-light dark:bg-primary-bg-dark shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${mobileDrawer ? 'translate-x-0' : '-translate-x-full'}`}
                ref={mobileNavRef}
            >
                <div className="flex justify-end p-4">
                    <button onClick={toggleMobileDrawer}>
                        <IoMdClose className="w-5 h-5 text-gray-600 hover:bg-black hover:text-white rounded-full transition-all duration-300 ease-in-out" />
                    </button>
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4">
                        Menu
                    </h2>
                    <ul className="space-y-4 relative">
                        <li className="relative group">
                            <span className="absolute -translate-x-[110%] group-hover:-translate-x-10 top-0 h-7 w-full bg-secondary-bg-light shadow-2xl rounded-full transition-transform duration-300 ease-in-out"></span>

                            <Link to="/" className="text-primary-text-light group-hover:text-black text-sm font-medium uppercase transition-all duration-300 ease-in-out z-10 relative">Men</Link>
                        </li>
                        <li className="relative group">
                            <span className="absolute -translate-x-[110%] group-hover:-translate-x-10 top-0 h-7 w-full bg-secondary-bg-light shadow-2xl rounded-full transition-transform duration-300 ease-in-out"></span>

                            <Link to="/" className="text-primary-text-light hover:text-black text-sm font-medium uppercase transition-all duration-300 ease-in-out z-10 relative">Women</Link>
                        </li>
                        <li className="relative group">
                            <span className="absolute -translate-x-[110%] group-hover:-translate-x-10 top-0 h-7 w-full bg-secondary-bg-light shadow-2xl rounded-full transition-transform duration-300 ease-in-out"></span>

                            <Link to="/" className="text-primary-text-light hover:text-black text-sm font-medium uppercase transition-all duration-300 ease-in-out z-10 relative">Top Wear</Link>
                        </li>
                        <li className="relative group">
                            <span className="absolute -translate-x-[110%] group-hover:-translate-x-10 top-0 h-7 w-full bg-secondary-bg-light shadow-2xl rounded-full transition-transform duration-300 ease-in-out"></span>

                            <Link to="/" className="text-primary-text-light hover:text-black text-sm font-medium uppercase transition-all duration-300 ease-in-out z-10 relative">Bottom Wear</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar