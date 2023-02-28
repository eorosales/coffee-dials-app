import { useState } from "react";
import { useLoaderData, useRevalidator } from "react-router-dom";
import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import NewDialForm from "../NewDialForm/NewDialForm";

const Dials = () => {
  const [dialInput, setDialInput] = useState({
    temp: "",
    weight: "",
    time: "",
    volume: "",
  });
  const { dials } = useLoaderData();

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
    <div>
      <h2>Dials</h2>
      <NewDialForm />
      <table>
        <thead>
          <tr>
            <th>Temperature</th>
            <th>Weight</th>
            <th>Time</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {dials.map((dial) => (
            <tr key={dial.id}>
              <td>{dial.temp}</td>
              <td>{dial.weight}</td>
              <td>{dial.time}</td>
              <td>{dial.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dials;
