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
      <form className='flex mt-8 mx-auto'>
        <label className='block'>
          <span>Roaster</span>
          <input
            type='text'
            value={roaster}
            onChange={(e) => setRoaster(e.target.value)}
            className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
          />
        </label>
        <label className='block'>
          <span>Origin</span>
          <input
            type='text'
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
          />
        </label>
        <label className='block'>
          <span>Process</span>
          <input
            type='text'
            value={process}
            onChange={(e) => setProcess(e.target.value)}
            className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
          />
        </label>
        <label className='block'>
          <span>Notes</span>
          <input
            type='text'
            value={process}
            onChange={(e) => setNotes(e.target.value.split(","))}
            className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
          />
        </label>
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
