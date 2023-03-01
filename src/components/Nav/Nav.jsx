import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className='bg-gray-800'>
      <div className='flex h-16 items-center mx-auto justify-between max-w-7xl px-4 sm:px-6 lg:px-2 text-white'>
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"dials"}>Dials</NavLink>
        </nav>
        <h1>Coffee Dials</h1>
        <div className='flex gap-4'>
          <p>Sign Out</p>
          <p>Avatar</p>
        </div>
      </div>
    </header>
  );
};

export default Nav;
