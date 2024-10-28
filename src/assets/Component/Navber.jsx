import { Link, NavLink } from "react-router-dom";


const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Royal opera</a>


                </div>
                <div className="text-center gap-5">
                    <NavLink to={'/home'}>Home</NavLink>
                    <NavLink to={'/ourproject'}>Our Project</NavLink>
                    <NavLink to={'/review'}>Review</NavLink>

                </div>
                <div className="flex-none gap-2">


                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            
                            <Link to={'/register'}>Register</Link>
                            <Link to={'/login'}>Log In</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;