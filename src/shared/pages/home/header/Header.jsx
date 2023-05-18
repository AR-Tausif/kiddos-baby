import { TbWorld } from 'react-icons/tb'
import { FaSignInAlt } from 'react-icons/fa'

const Header = () => {
    return (
        <div className="background_set flex items-center">
            <div className="container mx-auto">
                <p className="text-6xl font-bold leading-tight">Best baby Toys <br />
                    <span className="text-white">for all kids</span></p>
                <p className="my-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem  <br /> FIpsam has been the industrys standard dummy.</p>
                <div className="flex space-x-7 font-bold">
                    <button className="flex  items-center  gap-4 text-black bg-[#B7D4C5] border-0 py-3 px-5 focus:outline-none hover:bg-indigo-600 rounded-full text-sm">Go to categories <TbWorld /> </button>
                    <button className="flex  items-center  gap-4 bg-white text-black border-0 py-3 px-5 focus:outline-none hover:bg-indigo-600 rounded-full text-sm">Get Bestsellers now <FaSignInAlt /> </button>
                </div>
            </div>
        </div>
    );
};

export default Header;