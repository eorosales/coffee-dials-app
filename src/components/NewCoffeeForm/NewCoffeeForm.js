import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useRevalidator } from "react-router-dom";
const NewCoffeeForm = ({ db }) => {
  // Form input controlled value states
  const [roaster, setRoaster] = useState("");
  const [origin, setOrigin] = useState("");
  const [process, setProcess] = useState("");
  const [notes, setNotes] = useState([]);

  // Firebase 'coffees'  collection instance
  const coffeesCollectionRef = collection(db, "coffees");

  const revalidator = useRevalidator();

  // Clear form inputs
  const clearInputs = () => {
    setRoaster("");
    setOrigin("");
    setProcess("");
    setNotes([]);
  };

  // Add new coffee, revalidate, then clear form inputs
  const onSubmitCoffee = async (e) => {
    e.preventDefault();
    try {
      await addDoc(coffeesCollectionRef, {
        roaster,
        origin,
        process,
        notes,
      });
      revalidator.revalidate();
      clearInputs();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className='flex gap-20 my-8 mx-auto'>
      <div className='block relative z-0'>
        <input
          type='text'
          id='floating_standard'
          placeholder=' '
          value={roaster}
          onChange={(e) => setRoaster(e.target.value)}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        />
        <label
          htmlFor='floating_standard'
          className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
          Coffee Name{" "}
        </label>
      </div>

      <div className='block relative z-0'>
        <input
          type='text'
          id='floating_standard'
          placeholder=' '
          value={roaster}
          onChange={(e) => setRoaster(e.target.value)}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        />
        <label
          htmlFor='floating_standard'
          className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
          Roaster
        </label>
      </div>

      <div className='block relative z-0'>
        <input
          type='text'
          id='floating_standard'
          placeholder=' '
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        />
        <label
          htmlFor='floating_standard'
          className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
          Origin
        </label>
      </div>

      <div className='block relative z-0'>
        <input
          type='text'
          id='floating_standard'
          placeholder=' '
          value={process}
          onChange={(e) => setProcess(e.target.value)}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        />
        <label
          htmlFor='floating_standard'
          className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
          Process
        </label>
      </div>

      <div className='block relative z-0'>
        <input
          type='text'
          id='floating_standard'
          placeholder=' '
          value={notes}
          onChange={(e) => setNotes(e.target.value.split(","))}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        />
        <label
          htmlFor='floating_standard'
          className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
          Flavor Notes
        </label>
      </div>
      <button onClick={onSubmitCoffee}>Add New Coffee</button>
    </form>
  );
};

export default NewCoffeeForm;
