import { FaSignInAlt } from "react-icons/fa";
import "./gellary.css"

const Gellary = () => {
    return (
        // <div className="container mx-auto mt-32">
        //     <div className="grid grid-rows-4 grid-flow-col h-[80vh] gap-4 mb-40">
        //         <div className="collection_bg_set row-span-4 bg-red-700 rounded-lg p-14 shadow-lg flex flex-col items-center gap-9">
        //             <h3 className="text-3xl font-semibold">Beautiful Teddy Bear Clothes For Your Kid</h3>
        //             <p>Interesting Features Is Rich And Colorful, Each Button To Bring A Surprise To The Baby Introduction To Give Your Child Learn.</p>
        //             <div>
        //                 <button className="flex items-center  gap-4 bg-white text-black border-0 py-3 px-5 focus:outline-none hover:bg-indigo-600 rounded-full text-sm">Get Bestsellers now <FaSignInAlt /> </button>
        //             </div>
        //         </div>
        //         <div className="collection_bg_set2 row-span-2 col-span-2 bg-purple-700 rounded-lg p-14 shadow-lg">
        //             <div className="w-[30rem] space-y-8">
        //                 <h3 className="text-3xl font-semibold">Beautiful Teddy Bear Clothes For Your Kid</h3>
        //                 <p>Interesting Features Is Rich And Colorful, Each Button To Bring A Surprise To The Baby Introduction To Give Your Child Learn.</p>
        //                 <button className="flex  items-center  gap-4 bg-white text-black border-0 py-3 px-5 focus:outline-none hover:bg-indigo-600 rounded-full text-sm">Get Bestsellers now <FaSignInAlt /> </button>
        //             </div>

        //         </div>
        //         <div className="collection_bg_set3 row-span-2 col-span-2 bg-blue-700 w-[60rem] rounded-lg p-14 shadow-lg">03
        //             <div className="w-[30rem] space-y-8">
        //                 <h3 className="text-3xl font-semibold">Beautiful Teddy Bear Clothes For Your Kid</h3>
        //                 <p>Interesting Features Is Rich And Colorful, Each Button To Bring A Surprise To The Baby Introduction To Give Your Child Learn.</p>
        //                 <button className="flex  items-center  gap-4 bg-white text-black border-0 py-3 px-5 focus:outline-none hover:bg-indigo-600 rounded-full text-sm">Get Bestsellers now <FaSignInAlt /> </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="mt-52">
            <div className="mx-auto max-w-3xl text-center py-10">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Shop By Category
                </h2>

                <p className="mt-4 text-gray-500 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
                    laborum labore provident impedit esse recusandae facere libero harum
                    sequi.
                </p>
            </div>
            <div className="container mx-auto px-5 py-20 lg:px-32 lg:pt-12">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default Gellary;