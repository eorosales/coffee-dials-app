import { useState } from "react";
import { useLoaderData, useRevalidator } from "react-router-dom";
import { db } from "../../config/firebase";
import {
  // getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Coffee from "../Coffee/Coffee";
import NewCoffeeForm from "../NewCoffeeForm/NewCoffeeForm";

function Coffees() {
  // Form input controlled value states
  const [roaster, setRoaster] = useState("");
  const [origin, setOrigin] = useState("");
  const [process, setProcess] = useState("");
  const [notes, setNotes] = useState([]);

  // Router utilities
  const { coffees } = useLoaderData();
  const revalidator = useRevalidator();

  // Firebase 'coffees'  collection instance
  const coffeesCollectionRef = collection(db, "coffees");

  // Clear form inputs
  const clearInputs = () => {
    setRoaster("");
    setOrigin("");
    setProcess("");
    setNotes([]);
  };
  // Delete coffee and revalidate loader data

  const deleteCoffee = async (id) => {
    const coffeeDoc = doc(db, "coffees", id);
    await deleteDoc(coffeeDoc);
    revalidator.revalidate();
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
    <div className='flex flex-col '>
      <form className='flex mx-auto'>
        <input
          placeholder='Roaster...'
          value={roaster}
          onChange={(e) => setRoaster(e.target.value)}
          Name='block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600'
        />
        <input
          placeholder='Origin'
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          Name='block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600'
        />
        <input
          placeholder='Process'
          value={process}
          onChange={(e) => setProcess(e.target.value)}
          Name='block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600'
        />
        <input
          placeholder='Notes separated by commas'
          value={notes}
          onChange={(e) => setNotes(e.target.value.split(","))}
          Name='block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600'
        />
        <button onClick={onSubmitCoffee}>Submit</button>
      </form>
      <section className='grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 p-16 lg:grid-cols-4 lg:gap-8 xl:gap-14'>
        {coffees.map((coffee) => (
          <Coffee
            key={coffee.id}
            coffee={coffee}
            db={db}
            deleteCoffee={(id) => deleteCoffee(id)}
          />
        ))}
        <Coffee
          key='blank'
          coffee={{
            roaster: "Add New",
            origin: "",
            process: "",
            notes: "",
          }}
          db={db}
          deleteCoffee={(id) => deleteCoffee(id)}
        />
      </section>
    </div>
  );
}

export default Coffees;
