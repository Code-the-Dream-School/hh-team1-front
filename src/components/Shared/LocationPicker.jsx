import { useState } from "react";
import states from "../../util/states";
import { TextField, Select, FormControl, MenuItem, InputLabel, Box, OutlinedInput, createTheme } from "@mui/material";

const CustomLocationPicker = ({onLocationChange}) => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleCityChange = (event) => {
    const selectedCity = event.target.value; 
    setCity(selectedCity);
    onLocationChange(selectedCity, state); 
  };

  const handleStateChange = (event) => {
    const selectedStateCode = event.target.value; //value is the stateCode 
    setState(selectedStateCode);
    onLocationChange(city, selectedStateCode);
  };

  return (
    <Box display="flex" alignItems="center" margin="3px" width="100%" >
      <TextField
        value={city}
        onChange={handleCityChange}
        fullWidth
        variant="outlined"
        label="City"
        sx={{
          "& .MuiInputLabel-root": { fontSize: "0.9rem" },
          "& .MuiInputBase-input": { fontSize: "0.9rem" },
        }}
      />
      <FormControl fullWidth>
        <InputLabel sx={{ fontSize: "0.9rem" }}>State</InputLabel>
        <Select
          value={state}
          onChange={handleStateChange}
          input={<OutlinedInput label="State" />}
          MenuProps={{
            PaperProps: {
              sx: {
                maxHeight: "220px",
                scrollbarWidth: "none", // hide scroll bar
              },
            },
          }}
          sx={{ fontSize: "0.9rem"}}
        >
          {states.map((stateItem) => (
            <MenuItem
              key={stateItem.code}
              value={stateItem.code}
              sx={{ fontSize: "0.9rem" }}
            >
              {stateItem.name}
            </MenuItem> //value(stateCode) will be sent to backend
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomLocationPicker;
