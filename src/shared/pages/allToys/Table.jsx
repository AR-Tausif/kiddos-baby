import TableRow from "./TableRow";

const Table = ({ toys, self }) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {
                            self === "My Toys" &&
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>
                        }
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Seller
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="ps-8 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map((toy, index) => <TableRow self={self} key={index} toy={toy} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;