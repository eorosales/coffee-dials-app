import { useState } from "react";
import { Link } from "react-router-dom";

const Coffee = ({ coffee, deleteCoffee }) => {
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
    <div className='flex flex-col py-8 px-9 justify-between border hover:cursor-pointer hover:shadow shadow-slate-600 rounded-lg'>
      {/* Coffee Details */}

      <div className='relative'>
        <p className='text-lg font-bold text-black'>{coffee.roaster}</p>
        <p className=' text-gray-600 text-500'>{coffee.origin}</p>
        <p className='mt-4 text-base text-gray-700'>{coffee.notes}</p>

        <div className='absolute top-0 right-0'>
          <span
            className='text-slate-300 hover:cursor-pointer hover:text-red-600'
            onClick={() => deleteCoffee(coffee.id)}>
            <svg
              className='w-4 hover:w-5'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'></path>
            </svg>
          </span>
        </div>
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
