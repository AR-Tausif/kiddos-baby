import { useContext, useEffect, useState } from "react";
import Table from "../allToys/Table";
import { AuthContext } from "../../../provider/Provider";


const MyToys = () => {
    const [toys, setToys] = useState([]);
    const { user } = useContext(AuthContext)
    document.title = "Kiddos - My Toys"
    const url = `https://kiddos-server.vercel.app/products/email?email=${user.email}`
    useEffect(() => {
        fetch(url, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url])
    const handleDeleteData = (id) => {
        const deleteUrl = `http://localhost:3500/products/email?email=tausif.ritu1@gmail.com&id=${id}`

        fetch(deleteUrl, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                const deleteToyFilter = toys.filter(toy => toy._id !== id)
                setToys(deleteToyFilter);

            })
    }
    return (
        <div className="bg-base-100">
            <div className="container mx-auto mt-11">
                <Table self="My Toys" handleDeleteData={handleDeleteData} toys={toys} />
            </div>
        </div>

    );
};

export default MyToys;