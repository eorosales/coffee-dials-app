import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className='bg-gray-800'>
      <div className='flex h-16 items-center mx-auto justify-between max-w-10xl px-4 sm:px-6  text-white'>
        <h1>Coffee Dials</h1>

        <div className='flex gap-4'>
          <nav className='flex gap-4'>
            <NavLink to={"/"}>Coffees</NavLink>
          </nav>
          <p>Sign Out</p>
          <p>Avatar</p>
        </div>
      </div>
    </header>
  );
};

export default Nav;
