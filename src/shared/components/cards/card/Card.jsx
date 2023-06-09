import { TbWorld } from "react-icons/tb";
import "./card.css"
import { FaSignInAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../../provider/Provider";

const Card = ({ cover_image }) => {
    const { toys } = useContext(AuthContext)
    // console.log(toys[1]);
    return (
        <div className="rounded-xl overflow-hidden shadow-lg bg-gray-300">
            <img className="w-full" src={cover_image} alt="Mountain" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Mountain</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            {/* <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div> */}
        </div>

    );
};

export default Card;