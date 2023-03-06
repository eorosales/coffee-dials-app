import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const Coffee = ({ coffee, db, deleteCoffee }) => {
  // let { roaster, origin, process, notes } = coffee;

  const formattedInfo = () => {
    return Object.entries(coffee).map(([key, value]) => {
      console.log(key, value);
    });
  };

  formattedInfo();

  // const [updatedRoaster, setUpdatedRoaster] = useState("");

  // const updateRoaster = async (id) => {
  //   const coffeeDoc = doc(db, "coffees", id);
  //   await updateDoc(coffeeDoc, { roaster: updatedRoaster });
  // };

  return (
    <div className='flex flex-col py-8 px-9 justify-between shadow shadow-stone-400 rounded-md'>
      {/* Coffee Details */}

      <div className='relative'>
        <p className='text-lg font-bold text-black'>{coffee.roaster}</p>
        <p className=' text-gray-600 text-500'>{coffee.origin}</p>
        <p className='mt-4 text-base text-gray-700'>{coffee.notes}</p>
        <button>
          <EllipsisVerticalIcon className='absolute h-6 top-0 right-0 stroke-gray-400 hover:stroke-black' />
        </button>
      </div>
      {/* Dial buttons */}
      <div className='justify'>
        <Link
          // to={`coffees/${roaster}-${coffee.origin}`}
          className='inline-flex items-center justify-center px-4 py-1 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700 mr-4  hover:-translate-y-1 hover:transition-all'>
          Dials
        </Link>
        <Link
          to={`${coffee.id}/dials`}
          className='inline-flex items-center justify-center px-4 py-1 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700  hover:-translate-y-1 hover:transition-all'>
          Add Dial
        </Link>
      </div>
    </div>
  );
};

export default Coffee;
