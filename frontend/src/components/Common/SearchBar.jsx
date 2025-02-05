import { useEffect, useRef, useState } from "react";
import { HiMagnifyingGlass, HiMiniXCircle } from "react-icons/hi2";
import { AnimatePresence, motion } from "framer-motion";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, SetIsOpen] = useState(false);
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Searching for: ${searchTerm}`);
    }

    useEffect(() => {
        if (!isOpen) return

        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                SetIsOpen(false);
            }
        };

        const timer = setTimeout(() => {
            document.addEventListener('mousedown', handleClickOutside);
        }, 100)

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isOpen])

    return (
        <div className={`flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary-bg-light dark:bg-primary-bg-dark absolute top-0 left-0 w-full' : 'w-auto'}`} ref={inputRef}>
            {
                isOpen ? (
                    <AnimatePresence mode="wait">
                        <motion.form
                            onSubmit={handleSubmit}
                            className={`relative flex items-center justify-center w-full`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="relative w-1/2 my-1">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full py-2 px-4 bg-gray-100 rounded-lg focus:outline-none placeholder:text-gray-400"
                                />
                                <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" onClick={handleSubmit}>
                                    <HiMagnifyingGlass className="w-5 h-5" />
                                </button>
                            </div>
                            <button type="button" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary-text-light hover:text-black" onClick={() => SetIsOpen(!isOpen)}>
                                <HiMiniXCircle className="w-5 h-5" />
                            </button>
                        </motion.form>
                    </AnimatePresence>
                ) : (
                    <button onClick={() => SetIsOpen(!isOpen)} className="relative text-primary-text-light hover:text-black text-sm font-medium transition-transform 0.3s ease-in-out">
                        <HiMagnifyingGlass className="w-5 h-5" />
                    </button>
                )
            }
        </div>
    )
}

export default SearchBar