import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Coffee = ({ coffee, db, deleteCoffee }) => {
  // const [updatedRoaster, setUpdatedRoaster] = useState("");

  // const updateRoaster = async (id) => {
  //   const coffeeDoc = doc(db, "coffees", id);
  //   await updateDoc(coffeeDoc, { roaster: updatedRoaster });
  // };

  return (
    <div className='grid grid-cols-1 shadow shadow-stone-400 rounded-md'>
      <div className='py-8 px-9'>
        <p className='text-lg font-bold text-black'>{coffee.roaster}</p>
        <p className=' text-gray-600 text-500'>{coffee.origin}</p>
        <p className='mt-4 text-base text-gray-700'>{coffee.notes}</p>

        <Link
          to={`dials/${coffee.id}`}
          className='inline-flex items-center justify-center px-4 py-1 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700 mr-4'>
          Dials
        </Link>
        <Link
          to={`${coffee.id}/dials`}
          className='inline-flex items-center justify-center px-4 py-1 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700'>
          Add Dial
        </Link>
      </div>
    </div>
  );
};

export default Coffee;
