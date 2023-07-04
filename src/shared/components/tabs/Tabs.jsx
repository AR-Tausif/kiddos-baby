import { useContext, useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { AuthContext } from "../../../provider/Provider";
import TabCard from "../../section/tabs/tabCards/TabCard";

const CategoryTab = () => {

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
        <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center py-10">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Our Products
                </h2>

                <p className="mt-4 text-gray-500 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
                    laborum labore provident impedit esse recusandae facere libero harum
                    sequi.
                </p>
            </div>
            <Tabs>
                <TabList>
                    <Tab onClick={handleCarCategoryProduct}>Cars</Tab>
                    <Tab onClick={handleTruckCategoryProduct}>Trucks</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {
                            carToys.map((toy) => <TabCard key={toy._id} toy={toy} />)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {
                            carToys.map((toy) => <TabCard key={toy._id} toy={toy} />)
                        }
                    </div>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTab;