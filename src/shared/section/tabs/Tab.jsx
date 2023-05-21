import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabCard from './tabCards/TabCard';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/Provider';

const ReactTab = () => {
    // const [toys, setToys] = useState([])
    const [carToys, setCarToys] = useState([])
    const [trucks, setTrucks] = useState([])
    const { toys } = useContext(AuthContext);
    // useEffect(() => {
    //     fetch("http://localhost:3500/products")
    //         .then(res => res.json())
    //         .then(data => setToys(data))
    // }, [])

    const carCatToy = toys.filter(toy => toy.category === "Car")
    const truckCatToy = toys.filter(toy => toy.category == "Truck")

    useEffect(() => {
        setCarToys(carCatToy.slice(0, 3))
        setTrucks(truckCatToy.slice(0, 3))
    }, [])

    const handleCarCategoryProduct = () => {

        setCarToys(carCatToy.slice(0, 3));
    }
    const handleTruckCategoryProduct = () => {

        setTrucks(carTruckToy.slice(0, 3));
    }


    const handleLoadMore = () => {
        setCarToys(carCatToy)
        trucks(truckCatToy)
    }
    return (
        <div className="container mx-auto">
            <Tabs>
                <TabList>
                    <Tab id='tab' onClick={handleCarCategoryProduct}>Car</Tab>
                    <Tab onClick={handleTruckCategoryProduct}>Trucks</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {
                            carToys.map((toy) => <TabCard key={toy._id} toy={toy} />)
                        }
                    </div>
                    <div className="text-center">
                        <button onClick={handleLoadMore} className="mx-4 h-10 w-44 border rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">Load All</button>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-7">
                        {
                            trucks.map((toy) => <TabCard key={toy._id} toy={toy} />)
                        }
                    </div>
                    <div className="text-center">
                        <button onClick={handleLoadMore} className="mx-4 h-10 w-44 border rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">Load All</button>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReactTab;