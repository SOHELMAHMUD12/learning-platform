import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import ph from "../../image/8217b80b-1a69-4fad-ab18-9c8053efbb9d.jpg";
import { AuthContext } from "../UserContext/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire("User Log Out", "", "success");
      })
      .catch((error) => {});
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <NavLink to='/courses'>Courses</NavLink>
              </li>
              <li tabIndex={0}>
              <NavLink to='/blog'>Blog</NavLink>
                <ul className="p-2"></ul>
              </li>
              <li>
              <NavLink to='/faq'>FAQ</NavLink>
              </li>
              <li>
                <NavLink to='/login'>Login</NavLink>
              </li>
              <li>
              <NavLink to='/signup'>Signup</NavLink>
              </li>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">
            {" "}
            <img className="w-9" src={ph} alt="" /> <span>Online-Courses</span>
          </Link>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to='/courses'>Courses</NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink to='/faq'>
                FAQ
              </NavLink>
              <ul className="p-2"></ul>
            </li>
            <li>
              <NavLink to='/blog'>Blog</NavLink>
            </li>
            {user && user.uid ? (
              <>
                <li>
                  <NavLink
                    onClick={handleLogOut}
                    aria-label="logout"
                    title="Logout"
                    className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    aria-label="login"
                    title="Login"
                    
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
