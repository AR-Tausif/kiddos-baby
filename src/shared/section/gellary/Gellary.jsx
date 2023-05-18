import { FaSignInAlt } from "react-icons/fa";
import "./gellary.css"

const Gellary = () => {
    return (
        <div className="container mx-auto mt-32">
            <div className="grid grid-rows-4 grid-flow-col h-[80vh] gap-4 mb-40">
                <div className="collection_bg_set row-span-4 bg-red-700 rounded-lg p-14 shadow-lg flex flex-col items-center gap-9">
                    <h3 className="text-3xl font-semibold">Beautiful Teddy Bear Clothes For Your Kid</h3>
                    <p>Interesting Features Is Rich And Colorful, Each Button To Bring A Surprise To The Baby Introduction To Give Your Child Learn.</p>
                    <div>
                        <button className="flex items-center  gap-4 bg-white text-black border-0 py-3 px-5 focus:outline-none hover:bg-indigo-600 rounded-full text-sm">Get Bestsellers now <FaSignInAlt /> </button>
                    </div>
                </div>
                <div className="collection_bg_set2 row-span-2 col-span-2 bg-purple-700 rounded-lg p-14 shadow-lg">
                    <div className="w-[30rem] space-y-8">
                        <h3 className="text-3xl font-semibold">Beautiful Teddy Bear Clothes For Your Kid</h3>
                        <p>Interesting Features Is Rich And Colorful, Each Button To Bring A Surprise To The Baby Introduction To Give Your Child Learn.</p>
                        <button className="flex  items-center  gap-4 bg-white text-black border-0 py-3 px-5 focus:outline-none hover:bg-indigo-600 rounded-full text-sm">Get Bestsellers now <FaSignInAlt /> </button>
                    </div>

                </div>
                <div className="collection_bg_set3 row-span-2 col-span-2 bg-blue-700 w-[60rem] rounded-lg p-14 shadow-lg">03
                    <div className="w-[30rem] space-y-8">
                        <h3 className="text-3xl font-semibold">Beautiful Teddy Bear Clothes For Your Kid</h3>
                        <p>Interesting Features Is Rich And Colorful, Each Button To Bring A Surprise To The Baby Introduction To Give Your Child Learn.</p>
                        <button className="flex  items-center  gap-4 bg-white text-black border-0 py-3 px-5 focus:outline-none hover:bg-indigo-600 rounded-full text-sm">Get Bestsellers now <FaSignInAlt /> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gellary;