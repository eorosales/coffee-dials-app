import Grid from "@mui/material/Grid";

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
import { Outlet } from "react-router-dom";
import { Box } from "@mui/system";

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
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {coffees.map((coffee) => (
            <Grid item xs={2} sm={4} md={4} key={coffee.id}>
              <Coffee
                coffee={coffee}
                db={db}
                deleteCoffee={(id) => deleteCoffee(id)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Coffees;
