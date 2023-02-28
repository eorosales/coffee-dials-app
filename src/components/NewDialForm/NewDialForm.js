import { useState } from "react";
import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRevalidator } from "react-router-dom";

const NewDialForm = () => {
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
      <form onSubmit={handleSubmit}>
        <input
          type='number'
          name='temp'
          value={dialInput.temmp}
          onChange={(e) => handleChange(e)}
        />
        <input
          type='number'
          name='weight'
          value={dialInput.weight}
          onChange={(e) => handleChange(e)}
        />
        <input
          type='number'
          name='time'
          value={dialInput.time}
          onChange={(e) => handleChange(e)}
        />
        <input
          type='number'
          name='volume'
          value={dialInput.volume}
          onChange={(e) => handleChange(e)}
        />
        <button type='submit'>Add Dial</button>
      </form>
      <table></table>
    </div>
  );
};

export default NewDialForm;
