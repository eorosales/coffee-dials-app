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
  const onSubmitCoffee = async () => {
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
    <div className='App'>
      <h1>Coffee Dials App</h1>

      <div>
        <input
          placeholder='Roaster...'
          value={roaster}
          onChange={(e) => setRoaster(e.target.value)}
        />
        <input
          placeholder='Origin'
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <input
          placeholder='Process'
          value={process}
          onChange={(e) => setProcess(e.target.value)}
        />
        <input
          placeholder='Notes separated by commas'
          value={notes}
          onChange={(e) => setNotes(e.target.value.split(","))}
        />
        <button onClick={onSubmitCoffee}>Submit</button>
        {coffees.map((coffee) => (
          <ul key={coffee.id}>
            <Coffee
              coffee={coffee}
              db={db}
              deleteCoffee={(id) => deleteCoffee(id)}
            />
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Coffees;
