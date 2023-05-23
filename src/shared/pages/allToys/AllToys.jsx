import { useContext, useEffect, useRef, useState } from "react";
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
    // const { toys } = useContext(AuthContext)

    const [toys, setToys] = useState([]);
    const [asc, setAsc] = useState(true)
    const [search, setSearch] = useState('');
    const searchRef = useRef(null);

    useEffect(() => {
        fetch(`https://kiddos-server.vercel.app/products?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setToys(data));
    }, [search, asc])

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }


    return (
        <div className=" bg-yellow-50">
            <div className="container mx-auto mt-11">
                <CtaBanner title="All Toys" />
                <div className="flex justify-between">
                    <button
                        className="btn btn-primary"
                        onClick={() => setAsc(!asc)}
                    >{asc ? 'Price: High to Low' : 'Price: Low to High'}</button>

                    <div className="form-control">
                        <div className="input-group">
                            <input onChange={handleSearch} type="text" ref={searchRef} placeholder="Search…" className="input input-bordered" />
                            <button onChange={handleSearch} className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <Table toys={toys} />
            </div>
        </div>

    );
};

export default AllToys;