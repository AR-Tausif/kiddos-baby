import { TbWorld } from "react-icons/tb";
import "./card.css"
import { FaSignInAlt } from "react-icons/fa";

const Card = () => {
    return (
        <div className="relative bg_setup_card w-1/6 h-full rounded-2xl flex flex-col gap-40">
            <div className="ps-5 mt-7 z-50">
                <h3 className="text-white font-bold">
                    CATEGORIES
                </h3>
                <h2 className="text-3xl font-bold">Baby Tshirts</h2>
            </div>
            <div className="bg-gradient-to-r from-slate-500 to-gray-800 absolute w-full h-full opacity-20 rounded-2xl -z-0">.</div>
            <button className="flex mx-auto w-4/5 z-50
              items-center gap-4 bg-white text-black border-0 py-3 px-5 focus:outline-none hover:bg-indigo-600 rounded-full text-sm mb-7">Get Bestsellers now <FaSignInAlt /> </button>
        </div >

    );
};

export default Card;