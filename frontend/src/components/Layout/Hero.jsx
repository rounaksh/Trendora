import { Link } from 'react-router-dom'
import heroImg from '../../assets/trendora-hero.webp'

const Hero = () => {
    return (
        <section className="relative">
            <img src={heroImg} alt="trendora" className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-primary-text-dark p-6">
                    <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
                        Vacation <br /> Ready
                    </h1>
                    <p className="text-sm tracking-tighter md:text-lg mb-6">
                        Explore our vacation-ready outfits with fast world wide shipping.
                    </p>
                    <Link to="/shop" className="bg-primary-bg-light text-primary-text-light px-6 py-2 font-semibold rounded-md hover:bg-primary-bg-dark hover:text-primary-bg-light transition-all duration-300 ease-in-out">
                        Shop Now
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero