import { Link } from 'react-router-dom'
import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { FiPhoneCall } from 'react-icons/fi'

const Footer = () => {
    return (
        <footer className="pt-12 pb-3 border-y border-gray-300">
            <div className="container mx-auto grid md:grid-cols-[2fr_1fr_1fr_1fr] grid-cols-1 gap-10 px-6">
                <div>
                    <h3 className="text-lg text-primary-text-light mb-2 font-semibold">
                        Newsletter
                    </h3>
                    <p className="text-primary-text-light mb-4">
                        Be the first to hear about new products, exclusive events, and online offers.
                    </p>
                    <p className="font-medium text-sm text-gray-600 mb-6">
                        Sign up to get 10% off on your first order.
                    </p>

                    {/* Newsletter form */}
                    <form className="flex">
                        <input
                            placeholder="Enter your email"
                            type="email"
                            className="p-3 w-full text-sm border-t border-l border-b bg-gray-100 border-gray-300 rounded-l-md focus:outline-none focus:ring-gray-500 transition-all"
                            required
                        />
                        <button type="submit" className="bg-primary-bg-light text-primary-text-light px-6 py-3 text-sm rounded-r-md hover:bg-primary-bg-dark hover:text-primary-bg-light transition-all">Subscribe</button>
                    </form>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-lg text-primary-text-light mb-2 font-semibold">Shop</h3>
                    <ul className="space-y-5 text-gray-600">
                        <li>
                            <Link to={'#'} className='hover:text-gray-500 transition-colors'>
                                {`Men's Top Wear`}
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'} className='hover:text-gray-500 transition-colors'>
                                {`Women's Top Wear`}
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'} className='hover:text-gray-500 transition-colors'>
                                {`Men's Bottom Wear`}
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'} className='hover:text-gray-500 transition-colors'>
                                {`Women's Bottom Wear`}
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg text-primary-text-light mb-2 font-semibold">Support</h3>
                    <ul className="space-y-5 text-gray-600">
                        <li>
                            <Link to={'#'} className='hover:text-gray-500 transition-colors'>
                                {`Contact Us`}
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'} className='hover:text-gray-500 transition-colors'>
                                {`About Us`}
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'} className='hover:text-gray-500 transition-colors'>
                                {`FAQ's`}
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'} className='hover:text-gray-500 transition-colors'>
                                {`Featurs`}
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div className='flex flex-col justify-between'>
                    <div className='mb-6 md:mb-0'>
                        <h3 className="text-lg text-primary-text-light mb-2 font-semibold">Follow Us</h3>
                        <div className="flex items-center space-x-2">
                            <a
                                href="https://www.facebook.com"
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-gray-600 hover:text-gray-700 rounded-full p-1 transition-colors hover:bg-primary-bg-light'
                            >
                                <TbBrandMeta className='w-4 h-4' />
                            </a>
                            <a
                                href="https://www.facebook.com"
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-gray-600 hover:text-gray-700 rounded-full p-1 transition-colors hover:bg-primary-bg-light'
                            >
                                <IoLogoInstagram className='w-4 h-4' />
                            </a>
                            <a
                                href="https://www.facebook.com"
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-gray-600 hover:text-gray-700 rounded-full p-1 transition-colors hover:bg-primary-bg-light'
                            >
                                <RiTwitterXLine className='w-4 h-4' />
                            </a>
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-600 font-medium mb-2'>
                            Call Us
                        </p>
                        <a href="tel:+18001234567" className="hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out text-sm">
                            <FiPhoneCall className='w-4 h-4 text-primary-text-light inline-block mr-2' />
                            +1 (800) 123-4567
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="container mx-auto mt-5 md:mt-12 border-t border-gray-200 pt-2">
                <p className="text-gray-600 text-center">© {new Date().getFullYear()} Trendora. Made with ❤️ by <a href="https://github.com/rounaksh" className='font-semibold'>Rounak Sharma</a>.</p>
            </div>
        </footer>
    )
}

export default Footer