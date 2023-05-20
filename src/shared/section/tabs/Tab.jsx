import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabCard from './tabCards/TabCard';
import { useEffect, useState } from 'react';

const ReactTab = () => {
    const [toys, setToys] = useState([])
    const [carToys, setCarToys] = useState([])

    useEffect(() => {
        fetch("http://localhost:3500/products")
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    const handleCarCategoryProduct = () => {
        const carCatToy = toys.filter(toy => toy.category === "Car")
        console.log(carCatToy);
        setCarToys(carCatToy);
    }
    return (
        <div className="container mx-auto">
            <Tabs>
                <TabList>
                    <Tab onClick={handleCarCategoryProduct}>Car</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-3 gap-7">
                        {
                            carToys.map((toy) => <TabCard key={toy._id} toy={toy} />)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-3 gap-7">
                        <TabCard />
                        <TabCard />
                        <TabCard />
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReactTab;