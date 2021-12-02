import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@material-ui/core";
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';


// custom files
import CustomHeader from "./CustomHeader";

// set some vars
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      id:           data.get('id'),
      navn:         data.get('navn'),
      addresse:     data.get('addresse'),
      postnr:       data.get('postnr'),
      poststed:     data.get('poststed'),
      telefon:      data.get('telefon'),
      epost:        data.get('epost'),
      fødselsdato:  data.get('fødselsdato')
    });
  };

  return (
    <div>

      <CustomHeader />

      <Typography variant="h5">Registrer ny bruker</Typography>

      <Box component="form" onSubmit={handleSubmit}>

      <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Person Id"
          variant="outlined"
          name="id"
        />
        <br />

        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="navn"
          variant="outlined"
          name="navn"
        />
        <br />

        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="adresse"
          variant="outlined"
          name="adresse"
        />
        <br />

        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="postnr"
          variant="outlined"
          name="postnr"
        />
        <br />

        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="poststed"
          variant="outlined"
          name="poststed"
        />
        <br />

        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="telefon"
          variant="outlined"
          name="telefon"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="epost"
          variant="outlined"
          name="epost"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Fødsels Dato"
          variant="outlined"
          name="fødselsdato"
        />
        <br />
        Tillat-markedsforing ?
        <Checkbox {...label} defaultChecked />

        <br />



<Button variant="contained" color="primary"  type="submit">
          save
        </Button>

</Box>

    </div>
  );
}
