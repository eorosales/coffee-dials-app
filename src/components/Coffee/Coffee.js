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
    <div>
      <p>Roaster: {coffee.roaster}</p>
      <p>Origin: {coffee.origin}</p>
      <p>Process: {coffee.process}</p>
      <ul>
        {coffee.notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
      <button onClick={() => deleteCoffee(coffee.id)}>Delete Coffee</button>
      <Link to={`dials/${coffee.id}`}>Dials</Link>
      <Link to={`${coffee.id}/dials`}>Add Dial</Link>
      {/* <input
        placeholder='New Coffee...'
        onChange={(e) => setUpdatedRoaster(e.target.value)}
      /> */}
      {/* <button onClick={() => updateRoaster(coffee.id)}>Update</button> */}
    </div>
  );
};

export default Coffee;
