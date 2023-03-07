import { useState } from "react";
import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRevalidator } from "react-router-dom";

const NewDialForm = ({ coffeeId }) => {
  const [dialInput, setDialInput] = useState({
    temp: "",
    weight: "",
    time: "",
    volume: "",
  });

  const dialsCollectionRef = collection(db, "dials");
  const revalidator = useRevalidator();

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setDialInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(dialsCollectionRef, {
        coffee: coffeeId,
        temp: dialInput.temp,
        weight: dialInput.weight,
        time: dialInput.time,
        volume: dialInput.volume,
      });
      revalidator.revalidate();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form
      className='flex justify-center gap-20 my-8 mx-auto w-3/4'
      onSubmit={handleSubmit}>
      <div className='block relative z-0'>
        <input
          type='text'
          id='floating_standard'
          placeholder=' '
          value={dialInput.temp}
          onChange={(e) => handleChange(e)}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        />
        <label
          htmlFor='floating_standard'
          className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
          Temperature{" "}
        </label>
      </div>

      <div className='block relative z-0'>
        <input
          type='text'
          id='floating_standard'
          placeholder=' '
          value={dialInput.weight}
          onChange={(e) => handleChange(e)}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        />
        <label
          htmlFor='floating_standard'
          className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
          Weight
        </label>
      </div>

      <div className='block relative z-0'>
        <input
          type='text'
          id='floating_standard'
          placeholder=' '
          value={dialInput.time}
          onChange={(e) => handleChange(e)}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        />
        <label
          htmlFor='floating_standard'
          className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
          Time
        </label>
      </div>

      <div className='block relative z-0'>
        <input
          type='text'
          id='floating_standard'
          placeholder=' '
          value={dialInput.volume}
          onChange={(e) => handleChange(e)}
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
        />
        <label
          htmlFor='floating_standard'
          className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
          Volume
        </label>
      </div>

      <button type='submit'>Add Dial</button>
    </form>
  );
};

export default NewDialForm;
