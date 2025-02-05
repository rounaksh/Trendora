import { TbBrandMeta } from "react-icons/tb"
import { IoLogoInstagram } from "react-icons/io"
import { RiTwitterXLine } from "react-icons/ri"

const Topbar = () => {
    return (
        <div className="bg-primary-bg-light dark:bg-primary-bg-dark text-primary-text-light dark:text-primary-text-dark">
            <div className="container mx-auto flex justify-between items-center py-3 px-4">
                <ul className="hidden md:flex space-x-4 items-center">
                    <li className="hover:scale-125 transition-transform">
                        <TbBrandMeta className="w-5 h-5" />
                    </li>
                    <li className="hover:scale-125 transition-transform">
                        <IoLogoInstagram className="w-5 h-5" />
                    </li>
                    <li className="hover:scale-125 transition-transform">
                        <RiTwitterXLine className="w-4 h-4" />
                    </li>
                </ul>
                <p className="text-sm text-center grow">
                    We Ship Worldwide - Fast and Reliable Shipping!
                </p>
                <div className="text-sm hidden md:block">
                    <a href="tel:+18001234567" className="hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out">
                        +1 (800) 123-4567
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Topbar