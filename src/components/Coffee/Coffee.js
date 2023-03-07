import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const Coffee = ({ coffee, db, deleteCoffee }) => {
  const [isOpen, setIsOpen] = useState(false);
  // let { roaster, origin, process, notes } = coffee;

  // const formattedInfo = () => {
  //   return Object.entries(coffee).map(([key, value]) => {
  //     const arr = value.toString().split(" ");

  //     if (key !== "notes") {
  //       for (let i = 0; i < arr.length; i++) {
  //         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  //       }
  //       const formattedWord = arr.join(" ");
  //       return { [key]: formattedWord };
  //     }

  //     // all values of 'notes' are lowercase
  //     if (key === "notes") {
  //       return value.map((note) => note.toLowerCase());
  //     }

  //     return { [key]: value };
  //   });
  // };

  // console.log(formattedInfo());

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
        {/* Hover Menu */}
        {/* <div
          className='absolute top-0 right-0'
          onMouseEnter={() => setIsOpen((prev) => !prev)}>
          {!isOpen ? (
            <EllipsisVerticalIcon className='h-6 stroke-gray-400 block hover:stroke-black hover:cursor' />
          ) : (
            <div className='absolute top-0 left-0 bg-slate-700 text-white p-2'>
              <button>Edit Coffee</button>
              <button>Delete Coffee</button>
            </div>
          )}
        </div> */}
      </div>

      <div className='justify'>
        <Link
          to={`${coffee.id}/dials`}
          className='inline-flex items-center justify-center px-4 py-1 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700 mr-4  hover:-translate-y-1 hover:transition-all'>
          Dials
        </Link>
      </div>
    </div>
  );
};

export default Coffee;
