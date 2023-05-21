/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { MdDeleteSweep, MdUpdate } from "react-icons/md"
import { useState } from "react";
import UpdateToy from "../myToys/updateToy/UpdateToy"

const TableRow = ({ toy, self }) => {
    const [showModal, setShowModal] = useState(false);
    const [putToy, setPutToy] = useState({});

    const handleToyUpdate = (toy) => {
        setShowModal(true)
        setPutToy(toy)
    }
    return (

        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-slate-900">
            {
                self === "My Toys" &&
                <td className="px-6 py-4  text-red-400 text-2xl">
                    <div className="hover:bg-gray-300 w-10 rounded py-1">
                        <MdDeleteSweep className="mx-auto" />
                    </div>
                </td>
            }
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {toy.name}
            </th>
            <td className="px-6 py-4">
                {toy.seller_name}
            </td>
            <td className="px-6 py-4">
                {toy.sub_category}
            </td>
            <td className="px-6 py-4">
                {toy.available_quantity}
            </td>
            <td className="px-6 py-4">
                ${toy.price}
            </td>
            <td className="px-8 py-4">
                {
                    self ?
                        <button onClick={() => handleToyUpdate(toy)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit
                        </button>
                        :
                        <NavLink to={`/toy/${toy._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</NavLink>
                }
            </td>
            {
                showModal ? <UpdateToy setShowModal={setShowModal} putToy={putToy} /> : null
            }
        </tr>
    );
};

export default TableRow;