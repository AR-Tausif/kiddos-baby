import TableRow from "./TableRow";


const Table = ({ toys }) => {
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            Delete
                        </th>
                        <th>Seller</th>
                        <th>Name</th>
                        <th>Sub Category</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        toys.map((toy, index) => <TableRow key={index} toy={toy} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;