import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
    const cartProducts = [
        {
            id: 1,
            name: 'Tshirt',
            size: 'M',
            color: 'Red',
            quantity: 2,
            price: 10,
            image: 'https://picsum.photos/200?random=1',
        },
        {
            id: 2,
            name: 'Jeans',
            size: 'L',
            color: 'Blue',
            quantity: 1,
            price: 20,
            image: 'https://picsum.photos/200?random=2',
        },
    ]

    return (
        <>
            {
                cartProducts.map((product) => (
                    <div key={product.id} className="flex justify-between items-start py-1.5 border-b">
                        <div className="flex items-start">
                            <img src={product.image} alt={product.name} className="w-20 h-24 object-cover mr-4 rounded" />
                            <div>
                                <h3>{product.name}</h3>
                                <p className="text-sm text-gray-800">size: {product.size} | color: {product.color}</p>
                                <span className="flex items-center justify-between mt-2">
                                    <button className="py-0 hover:bg-secondary-text-light dark:hover:bg-secondary-text-dark hover:text-primary-text-dark dark:hover:text-primary-text-light rounded-xs transition duration-300 ease-in-out">
                                        <IoMdAdd />
                                    </button>
                                    <span className="mx-4 bg-gray-100 rounded-xs px-7">{product.quantity}</span>
                                    <button className="py-0 hover:bg-secondary-text-light dark:hover:bg-secondary-text-dark hover:text-primary-text-dark dark:hover:text-primary-text-light rounded-xs transition duration-300 ease-in-out">
                                        <IoMdRemove />
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium">${product.price.toLocaleString()}</p>
                            <RiDeleteBin3Line className="w-5 h-5  text-red-700 mt-8" />
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default CartContents