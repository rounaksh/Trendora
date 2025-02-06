import mensCollection from '../../assets/mens-collection.webp'
import womensCollection from '../../assets/womens-collection.webp'
import { Link } from 'react-router-dom'

const GenderCollection = () => {
    return (
        <section className='p-16'>
            <div className="container mx-auto flex flex-col md:flex-row gap-8">
                {/* Womens Collection */}
                <div className="relative flex-1">
                    <img src={womensCollection} alt="womens collection" className="w-full h-[500px] object-cover" />
                    <div className="absolute bottom-8 left-8 bg-primary-bg-dark/70 p-3 rounded-sm">
                        <h2 className="text-2xl font-bold text-primary-text-dark mb-3">Womens Collection</h2>
                        <Link to='/collections/all?gender=womens' className='text-primary-text-dark underline'>Shop Now</Link>
                    </div>
                </div>
                {/* Mens Collection */}
                <div className="relative flex-1">
                    <img src={mensCollection} alt="mens collection" className="w-full h-[500px] object-cover" />
                    <div className="absolute bottom-8 left-8 bg-primary-bg-dark/70 p-3 rounded-sm">
                        <h2 className="text-2xl font-bold text-primary-text-dark mb-3">Mens Collection</h2>
                        <Link to='/collections/all?gender=mens' className='text-primary-text-dark underline'>Shop Now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GenderCollection