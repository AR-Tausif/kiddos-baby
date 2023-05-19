
const TableRow = ({ toy }) => {
    return (
        <tr className="shadow-xl">
            <th>
                <button className="btn btn-circle btn-outline btn-warning btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-lg w-32 h-32">
                            <img src={toy?.picture_url} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold"> {toy.seller_name}</div>
                        <div className="text-sm opacity-50">Price: $120</div>
                        <div className="text-sm opacity-50">Available: 10</div>
                    </div>
                </div>
            </td>
            <td>
                <p className="font-bold">{toy?.name}</p>
            </td>
            <td>{toy?.sub_category}</td>
            <th>
                <button className="btn btn-ghost btn-xs">Details</button>
            </th>
        </tr>
    );
};

export default TableRow;