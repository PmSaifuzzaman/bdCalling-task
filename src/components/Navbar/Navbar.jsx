import logo from "../../assets/Resources/Logo/LOGO.png"

const Navbar = () => {
    return (
        <div className="navbar bg-white max-w-7xl mx-auto lg:bg-opacity-70 lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium text-lg">
                        <li>Blog</li>
                        <li>Offer</li>
                        <li>Airlines</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="flex items-center lg:pl-20">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-7 font-medium text-lg">
                    <li>Blog</li>
                    <li>Offer</li>
                    <li>Airlines</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="navbar-end lg:mr-20">
                <a className="btn bg-gradient-to-r from-[#006CE4] to-[#006CE4] text-white rounded-lg px-7 py-1.5">Sign in</a>
            </div>
        </div>
    );
};

export default Navbar;