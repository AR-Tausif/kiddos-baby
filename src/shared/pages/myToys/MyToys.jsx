import { useContext, useEffect, useState } from "react";
import Table from "../allToys/Table";
import { AuthContext } from "../../../provider/Provider";


const MyToys = () => {
    const [toys, setToys] = useState([]);
    const { user } = useContext(AuthContext)
    const url = `http://localhost:3500/products/email?email=${user.email}`
    useEffect(() => {
        fetch(url, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url])
    return (
        <div className=" bg-warning">
            <div className="container mx-auto mt-11">
                <Table toys={toys} />
            </div>
        </div>

    );
};

export default MyToys;