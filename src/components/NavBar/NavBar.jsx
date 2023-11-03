import { Link } from "react-router-dom";
import navIcon from "../../../public/nav-icon.png"

const NavBar = () => {

    const navLinks = (
        <>
            <Link className="text-lg text-white mx-4 my-2" to='/'>Home</Link>
            <Link className="text-lg text-white mx-4 my-2" to='/allPhotos'>All Photos</Link>
            <Link className="text-lg text-white mx-4 my-2" to='/addPhoto'>Add a Photo</Link>
            <Link className="text-lg text-white mx-4 my-2" to='/aboutUs'>About Us</Link>
        </>
    )

    return (
        <div className="flex justify-center w-full">
            <div className="navbar bg-slate-700 px-5 rounded-full my-5 p-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img className="w-[100px]" src={navIcon} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;