import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";

const SingleSelect = () => {
  const options = ["Employee", "Contractor", "Placeholder"];

  return (
    <>
      <h2>Single Select</h2>
      <h3>Type select dropdown in Modal User</h3>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        renderInput={(params) => <TextField {...params} />}
      />
    </>
  );
};

export default SingleSelect;
