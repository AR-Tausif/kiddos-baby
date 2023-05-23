import { useContext, useEffect, useState } from "react";
import Table from "./Table";
import { AuthContext } from "../../../provider/Provider";
import CtaBanner from "../../components/banner/CtaBanner";

const AllToys = () => {
    document.title = "Kiddos. | All Toys"
    // const [toys, setToys] = useState([]);

    // useEffect(() => {
    //     fetch("/public/products.json")
    //         .then(res => res.json())
    //         .then(data => setToys(data))
    // }, [])
    const { toys } = useContext(AuthContext)
    console.log(toys[1]);
    return (
        <div className=" bg-yellow-50">
            <div className="container mx-auto mt-11">
                <CtaBanner title="All Toys" />
                <Table toys={toys} />
            </div>
        </div>

    );
};

export default AllToys;