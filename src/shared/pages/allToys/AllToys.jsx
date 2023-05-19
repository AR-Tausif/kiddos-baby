import { useEffect, useState } from "react";
import Table from "./Table";

const AllToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch("/public/products.json")
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div className=" bg-warning">
            <div className="container mx-auto mt-11">
                <Table toys={toys} />
            </div>
        </div>

    );
};

export default AllToys;