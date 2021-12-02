import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@material-ui/core";
import Checkbox from '@mui/material/Checkbox';


// custom files
import CustomHeader from "./CustomHeader";

// set some vars
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function App() {

  return (
    <div>

      <CustomHeader />

      <Typography variant="h5">Registrer ny bruker</Typography>
      <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="id"
          variant="outlined"
        />
        <br />

        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="navn"
          variant="outlined"
        />
        <br />

        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="adresse"
          variant="outlined"
        />
        <br />

        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="postnr"
          variant="outlined"
        />
        <br />

        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="poststed"
          variant="outlined"
        />
        <br />

        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="telefon"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="epost"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="fødselsdato"
          variant="outlined"
        />
        <br />
        Tillat-markedsforing ?
        <Checkbox {...label} defaultChecked />

        <br />
<form>


<Button variant="contained" color="primary">
          save
        </Button>

</form>

    </div>
  );
}
