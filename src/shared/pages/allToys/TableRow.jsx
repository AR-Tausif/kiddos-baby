import { NavLink } from "react-router-dom";
import { MdDeleteSweep } from "react-icons/md"

const TableRow = ({ toy, self }) => {
    return (

        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            {
                self === "My Toys" &&
                <td className="px-6 py-4  text-red-400 text-2xl">
                    <MdDeleteSweep />
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
                {toy.quantity}
            </td>
            <td className="px-6 py-4">
                ${toy.price}
            </td>
            <td className="px-6 py-4 text-right">
                <NavLink to={`/toy/${toy._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</NavLink>
            </td>
        </tr>
    );
};

export default TableRow;