import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const CartDrawer = ({ drawerOpen, toggleDrawer }) => {
    const clickRef = useRef(null);

    useEffect(() => {
        if (!drawerOpen) return

        const handleClickOutside = (event) => {
            if (clickRef.current && !clickRef.current.contains(event.target)) toggleDrawer();
        }

        const timer = setTimeout(() => {
            document.addEventListener('mousedown', handleClickOutside);
        }, 100)

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [drawerOpen, toggleDrawer])


    return (
        <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-primary-bg-light dark:bg-primary-bg-dark shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col z-50 ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`} ref={clickRef}>
            <div className="flex justify-end p-4">
                <button onClick={toggleDrawer}>
                    <IoMdClose className="w-4 h-4 text-gray-600 hover:bg-black hover:text-white rounded-full transition-all duration-300 ease-in-out" />
                </button>
            </div>
            <div className="grow p-4 overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                <CartContents />
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 sticky bottom-0">
                <button className="w-full bg-black text-primary-text-dark dark:text-primary-text-light py-2 px-4 rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300 ease-in-out">Checkout</button>
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 text-center tracking-tighter">Shipping and taxes calculated at checkout.</p>
            </div>
        </div>
    )
}

CartDrawer.propTypes = {
    drawerOpen: PropTypes.bool.isRequired,  // Must be a boolean
    toggleDrawer: PropTypes.func.isRequired // Must be a function
};

export default CartDrawer