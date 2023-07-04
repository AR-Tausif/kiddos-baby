import { useContext, useEffect, useRef, useState } from "react";
import Table from "./Table";
import { AuthContext } from "../../../provider/Provider";
import CtaBanner from "../../components/banner/CtaBanner";
import GridView from "../../components/productView/GridView";
import FilterCategory from "../../components/filterCategory/FilterCategory";

const AllToys = () => {
    const [view, setView] = useState(false)

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
        <div className="">
            <div className="container mx-auto mt-11">
                <CtaBanner title="All Toys" />
                {/* <div className="flex justify-between">
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
                </div> */}
                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <div className="w-full md:w-1/2">
                        <form className="flex items-center">
                            <label htmlFor="simple-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="" />
                            </div>
                        </form>
                    </div>
                    <FilterCategory view={view} setView={setView} />
                </div>

                {/* list of data */}
                <div className={`grid ${view ? "grid-cols-3" : "grid-cols-1"} max-w-screen-xl mx-auto gap-4 py-12`}>
                    {
                        toys.map((toy, index) => <GridView key={index} toy={toy} view={view} />)
                    }
                </div>
            </div>
        </div>

    );
};

export default AllToys;