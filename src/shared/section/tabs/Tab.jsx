import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabCard from './tabCards/TabCard';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/Provider';

const ReactTab = () => {

    const [trucks, setTrucks] = useState([])
    const { toys } = useContext(AuthContext);
    const [carToys, setCarToys] = useState([])
    console.log(carToys);

    useEffect(() => {
        fetch("https://kiddos-server.vercel.app/products")
            .then(res => res.json())
            .then(data => {
                setCarToys(data.slice(0, 6))

            })
    }, [])

    const carCatToy = toys.filter(toy => toy.category === "Car")
    const truckCatToy = toys.filter(toy => toy.category == "Truck")


    const handleCarCategoryProduct = () => {
        setCarToys(carCatToy)

    }
    const handleTruckCategoryProduct = () => {
        setCarToys(truckCatToy)
    }


    const handleLoadMore = () => {
        setCarToys(carCatToy)
        setTrucks(truckCatToy)
    }
    return (
        <div className="container mx-auto py-20">
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
            <ul className="w-1/2 flex border-b border-gray-100 mx-auto">
                <li className="flex-1">
                    <button onClick={handleCarCategoryProduct} className="relative block p-4">
                        <span
                            className="absolute inset-x-0 -bottom-px h-px w-full border-pink-600 border-b-2 bg-pink-600"
                        ></span>

                        <div className="flex items-center justify-center gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                />
                            </svg>

                            <span className="text-sm font-medium text-gray-900"> Cars </span>
                        </div>
                    </button>
                </li>

                <li className="flex-1">
                    <button onClick={handleTruckCategoryProduct} className="relative block p-4 border-pink-600 focus:border-b-2">
                        <div className="flex items-center justify-center gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                />
                            </svg>

                            <span className="text-sm font-medium text-gray-900"> Trucks </span>
                        </div>
                    </button>
                </li>

                <li className="flex-1">
                    <button className="relative block p-4 border-pink-600 focus:border-b-2">
                        <div className="flex items-center justify-center gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                                />
                            </svg>

                            <span className="text-sm font-medium text-gray-900"> Bus </span>
                        </div>
                    </button>
                </li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    carToys.map((toy) => <TabCard key={toy._id} toy={toy} />)
                }
            </div>
            <div className="text-center">
                <button onClick={handleLoadMore} className="mx-4 h-10 w-44 border rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">Load All</button>
            </div>
        </div>
    );
};

export default ReactTab;