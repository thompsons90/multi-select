import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { currency_list, timezones } from "./utils/data";
import NewCheck from "./a1Check/NewCheck";
const HoursCurrency = () => {
  const [currency, setCurrency] = useState("");
  const [timeFormat, setTimeFormat] = useState("12-hour");
  const [zone, setZone] = useState("");

  const handleZoneChange = (e) => {
    setZone(e.target.value);
  };
  const handleFormatChange = (e) => {
    setTimeFormat(e.target.value);
  };
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };
  return (
    <div style={{ border: "2px solid red", padding: "10px" }}>
      <div
        style={{
          border: "2px solid gray",
          borderRadius: "10px",
          padding: "5px",
        }}
      >
        <h2>Work schedule</h2>
        <div>
          <p>Time zone</p>

          <Box sx={{ minWidth: 300 }}>
            <FormControl
              sx={{
                width: 500,
                //   display: "flex",
                //   flexDirection: "row",
              }}
            >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={zone}
                onChange={handleZoneChange}
                style={{
                  fontWeight: "bold",
                }}
                sx={{ width: 400 }}
                size="small"
              >
                {timezones.map((data) => (
                  <MenuItem
                    value={data.name}
                  >{`(${data.offset}) ${data.name}`}</MenuItem>
                ))}
              </Select>
              <p>The time zone setting is used for notifications by default.</p>
            </FormControl>
          </Box>
        </div>
        <div>
          <p>Work days</p>
          <NewCheck />
        </div>
        <div>
          <p>Time format</p>
          <FormControl>
            <Select
              value={timeFormat}
              sx={{ width: 300 }}
              onChange={handleFormatChange}
            >
              <MenuItem value="12-hour">12-hour clock</MenuItem>
              <MenuItem value="24-hour">24-hour clock</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <p>Time zone</p>

          <Box sx={{ minWidth: 300 }}>
            <FormControl
              sx={{
                width: 500,
                //   display: "flex",
                //   flexDirection: "row",
              }}
            >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                onChange={handleCurrencyChange}
                sx={{ width: 400 }}
                size="small"
              >
                {currency_list.map((data) => (
                  <MenuItem
                    value={data.name}
                  >{`${data.code} - ${data.name}`}</MenuItem>
                ))}
              </Select>
              <p>The time zone setting is used for notifications by default.</p>
            </FormControl>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default HoursCurrency;
