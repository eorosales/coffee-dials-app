import { useState } from "react";
import { useLoaderData, useRevalidator } from "react-router-dom";
import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import NewDialForm from "../NewDialForm/NewDialForm";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

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
    <Box sx={{ width: "fit" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'>Temperature</TableCell>
              <TableCell align='right'>Weight&nbsp;(g)</TableCell>
              <TableCell align='right'>Time&nbsp;(g)</TableCell>
              <TableCell align='right'>Volume&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dials.map((dial) => (
              <TableRow
                key={dial.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {dial.name}
                </TableCell>
                <TableCell align='right'>{dial.temp}</TableCell>
                <TableCell align='right'>{dial.weight}</TableCell>
                <TableCell align='right'>{dial.time}</TableCell>
                <TableCell align='right'>{dial.volume}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dials;
