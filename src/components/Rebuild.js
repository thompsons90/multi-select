// import React from "react";
// import { Autocomplete, createFilterOptions, TextField } from "@mui/material";

// const filter = createFilterOptions();

// const Rebuild = () => {
//   const [value, setValue] = React.useState(null);

//   const options = ["Manager", "Frontend", "Backend", "Fullstack", "Associate"];

//   return (
//     <Autocomplete
//       value={value}
//       onChange={(event, newValue) => {
//         if (typeof newValue === "string") {
//           setValue({
//             title: newValue,
//           });
//         } else if (newValue && newValue.inputValue) {
//           // Create a new value from the user input
//           setValue({
//             title: newValue.inputValue,
//           });
//         } else {
//           setValue(newValue);
//         }
//       }}
//       filterOptions={(options, params) => {
//         const filtered = filter(options, params);

//         // Suggest the creation of a new value
//         if (params.inputValue !== "") {
//           filtered.push({
//             inputValue: params.inputValue,
//             title: `Add "${params.inputValue}"`,
//           });
//         }

//         return filtered;
//       }}
//       selectOnFocus
//       clearOnBlur
//       handleHomeEndKeys
//       id="free-solo-with-text-demo"
//       options={options}
//       //   renderOption={options}
//       freeSolo
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           label="Free solo with text demo"
//           variant="outlined"
//         />
//       )}
//     />
//   );
// };

// export default Rebuild;
