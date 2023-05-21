import { useContext, useEffect, useState } from "react";
import Table from "./Table";
import { AuthContext } from "../../../provider/Provider";

const AllToys = () => {
    // const [toys, setToys] = useState([]);

    // useEffect(() => {
    //     fetch("/public/products.json")
    //         .then(res => res.json())
    //         .then(data => setToys(data))
    // }, [])
    const { toys } = useContext(AuthContext)
    return (
        <div className=" bg-yellow-100">
            <div className="container mx-auto mt-11">
                <Table toys={toys} />
            </div>
        </div>

    );
};

export default AllToys;