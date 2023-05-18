import { BsRocketTakeoffFill, BsTelephone } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'

const Navbar = () => {
    return (
        <>
            <div className="container mx-auto flex justify-between py-5">
                <div className="flex gap-10 items-center">
                    <BsRocketTakeoffFill />
                    <p>7 days a week
                        from 9:00 am to 7:00 pm</p>
                </div>
                <div className="flex gap-4 items-center">
                    <p className='inline-flex items-center gap-2'>
                        <BsTelephone />
                        Contact
                    </p>
                    <p className='inline-flex items-center gap-2'> <BiUser /> Log in</p>
                </div>
            </div>

            <div className='container mx-auto grid grid-cols-6 items-center'>
                <h2 className='w-320 text-5xl font-bold'>Kiddos</h2>
                <div className="col-span-5 px-3 bg-white rounded-full">
                    <div className="flex relative justify-between items-center">
                        <ul className="menu menu-horizontal px-1">
                            <li tabIndex={0} className='bg-[#B7D4C5] relative rounded-full my-3'>
                                <a>
                                    All Toys
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2 bg-base-100 absolute mr-96">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                        <div>
                            <button className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                            <button className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                    <span className="badge badge-xs badge-primary indicator-item"></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;