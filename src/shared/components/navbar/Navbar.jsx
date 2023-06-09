import { BsRocketTakeoffFill, BsTelephone } from 'react-icons/bs'
import { VscSignOut, VscSignIn } from 'react-icons/vsc'
import { BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/Provider';

const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext)
    const handleUserSignOut = () => {
        userSignOut()
            .then(() => { })
            .catch(err => console.error(err))
    }
    return (
        <>
            <div className="container mx-auto flex justify-between py-5">
                <div className="flex gap-2 lg:gap-10 items-center">
                    <BsRocketTakeoffFill />
                    <p>7 days a week
                        from 9:00 am to 7:00 pm</p>
                </div>
                <div className="flex gap-2 lg:gap-4 items-center">
                    <p className='inline-flex items-center gap-1'>
                        <BsTelephone />
                        Contact
                    </p>
                    {
                        user ? <button onClick={handleUserSignOut} className='inline-flex items-center gap-1'> <VscSignOut /> Log Out</button>
                            :
                            <Link to="/login">
                                <button className='inline-flex items-center gap-2'> <VscSignIn /> Log in</button>
                            </Link>
                    }
                </div>
            </div>

            <div className='container mx-auto flex lg:grid lg:grid-cols-6 justify-between items-center'>
                <h2 className='w-320 text-5xl font-bold'>Kiddos</h2>


                <div className="col-span-5  ">

                    <div className=" bg-white px-3 rounded-full hidden lg:flex xl:flex relative justify-between items-center">
                        <ul className="menu menu-horizontal items-center gap-6 px-1">
                            <li tabIndex={0} className='bg-[#B7D4C5] rounded-full my-3'>
                                <Link to="/all-toys">
                                    All Toys
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-base-100 absolute mr-96">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <Link to="/">
                                <li className='my-3 hover:border-b-4 border-[#B7D4C5]'>Home</li>
                            </Link>
                            {
                                user && <>
                                    <Link to="/my-toys">
                                        <li className='my-3 hover:border-b-4 border-[#B7D4C5]'>My Toys</li>
                                    </Link>
                                    <Link to="/add-toy">
                                        <li className='my-3 hover:border-b-4 border-[#B7D4C5]'>Add Toys</li>
                                    </Link>
                                </>
                            }
                            <Link to="/blog">
                                <li className='my-3 hover:border-b-4 border-[#B7D4C5]'>Blogs</li>
                            </Link>
                        </ul>
                        <div className='flex items-center gap-4'>
                            <button className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                            {
                                user ?
                                    <>
                                        <button className="btn btn-ghost btn-circle">
                                            <div className="indicator">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                </svg>

                                                <span className="badge badge-xs badge-primary indicator-item">0</span>
                                            </div>
                                        </button>
                                        <Link to="/profile">
                                            {
                                                user.photoURL ? <button className="btn btn-ghost btn-circle">
                                                    <img className='w-10 h-10 rounded-full' src={user?.photoURL} title={user?.displayName} alt="" />
                                                </button>
                                                    :
                                                    <button className="btn btn-ghost btn-circle">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                    </button>
                                            }
                                        </Link>
                                    </>
                                    :
                                    <Link to="register">
                                        <button className="btn btn-ghost btn-circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </button>
                                    </Link>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Navbar;