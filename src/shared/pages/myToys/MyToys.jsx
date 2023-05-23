import { useContext, useEffect, useState } from "react";
import Table from "../allToys/Table";
import { AuthContext } from "../../../provider/Provider";
import CtaBanner from "../../components/banner/CtaBanner";


const MyToys = () => {
    document.title = "Kiddos - My Toys"
    const [toys, setToys] = useState([]);
    const { user } = useContext(AuthContext)
    const url = `https://kiddos-server.vercel.app/products/email?email=${user.email}`
    useEffect(() => {
        fetch(url, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url])
    const handleDeleteData = (id) => {
        const deleteUrl = `https://kiddos-server.vercel.app/products?id=${id}`
        const sureDelete = confirm("Are you wanna delete?")
        if (sureDelete) {

            fetch(deleteUrl, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const deleteToyFilter = toys.filter(toy => toy._id !== id)
                    setToys(deleteToyFilter)
                })
        }
    }
    return (
        <div className="bg-base-100">
            <div className="container mx-auto mt-11">
                <CtaBanner title="My Toys" />
                <Table self="My Toys" handleDeleteData={handleDeleteData} toys={toys} />
            </div>
        </div>

    );
};

export default MyToys;