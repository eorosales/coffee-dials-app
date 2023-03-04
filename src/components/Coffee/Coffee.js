import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import { Link } from "react-router-dom";

const Coffee = ({ coffee, db, deleteCoffee }) => {
  // const [updatedRoaster, setUpdatedRoaster] = useState("");

  // const updateRoaster = async (id) => {
  //   const coffeeDoc = doc(db, "coffees", id);
  //   await updateDoc(coffeeDoc, { roaster: updatedRoaster });
  // };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {coffee.process} Process
        </Typography>
        <Typography variant='h5' component='div'>
          {coffee.roaster}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {coffee.origin}
        </Typography>
        <Typography variant='body2'>{coffee.notes}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Coffee;
