import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div>
      <div className="navbar bg-secondary text-neutral">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl transition ease-in-out delay-150 bg-primary hover:-translate-y-1 hover:scale-110 hover:bg-accent hover:text-white duration-300" to="/">
            Memory Lane
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-accent hover:text-white duration-300" to="/">
                Home
              </Link>
            </li>
            <li tabIndex="0">
              <Link className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-accent hover:text-white duration-300" to="/AboutUs">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
