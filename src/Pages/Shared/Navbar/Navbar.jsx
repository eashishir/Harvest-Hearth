import { Link } from "react-router-dom";


const Navbar = () => {
    const navOption = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/menu">Our Menu</Link></li>
    <li><Link to="/order/chicken">Order</Link></li>


                            
    </>



    return (
        <>
            <div className="max-w-screen-xl opacity-60 fixed z-10 text-white navbar bg-slate-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Harvest & Hearth</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <li   className="btn"><Link to="/login">Login</Link></li>
                </div>
            </div>

        </>
    );
};

export default Navbar;