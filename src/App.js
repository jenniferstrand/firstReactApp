import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@material-ui/core";

import CustomHeader from "./CustomHeader";


export default function App() {


  return (
    <div>

      <CustomHeader />
      <Typography variant="h5">Registrer ny bruker</Typography>
      <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="setgoal"
          variant="outlined"
        />
        <br />
<form>


<Button variant="contained" color="primary">
          save
        </Button>

</form>

    </div>
  );
}
