import React, { useState } from "react";
import { MemoizedNavbar } from "../../../src/components/Navbar";
import Sidebar from "../../../src/components/settings/Sidebar";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { currency_list, timezones } from "../../../src/utils/data";
import TimeAssign from "../../../src/components/settings/TimeAssign";

const HoursCurrency = (props) => {
  const [currency, setCurrency] = useState("");
  const [day, setDay] = useState("monday");
  const [timeFormat, setTimeFormat] = useState("12-hour");
  const [zone, setZone] = useState("");

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const handleZoneChange = (e) => {
    setZone(e.target.value);
  };
  const handleFormatChange = (e) => {
    setTimeFormat(e.target.value);
  };
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  // console.log(timezones);
  return (
    <main>
      <MemoizedNavbar />
      <Sidebar />

      <section className="settings-container" style={{ padding: "10px" }}>
        <div className="header">
          <h2>Hours & currency</h2>
          <p>Update your team's scheduled working hours.</p>
        </div>
        <div
          style={{
            border: "2px solid gray",
            borderRadius: "10px",
            padding: "5px",
          }}
        >
          <h2>Work schedule</h2>
          <div style={{ display: "flex" }}>
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
                    size="medium"
                  >
                    {timezones?.map((data) => (
                      <MenuItem
                        value={data.name}
                      >{`(${data.offset}) ${data.name}`}</MenuItem>
                    ))}
                  </Select>
                  <p>
                    The time zone setting is used for notifications by default.
                  </p>
                </FormControl>
              </Box>
            </div>

            <div>
              {/* <InputLabel id="demo-simple-select-label">day</InputLabel> */}
              <p>Start week on</p>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={day}
                onChange={handleDayChange}
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  fontWeight: "bold",
                }}
                sx={{ width: 125 }}
                size="medium"
              >
                <MenuItem value={"sunday"}>Sunday</MenuItem>
                <MenuItem value={"monday"}>Monday</MenuItem>
                <MenuItem value={"tuesday"}>Tuesday</MenuItem>
                <MenuItem value={"wednesday"}>Wednesday</MenuItem>
                <MenuItem value={"thursday"}>Thursday</MenuItem>
                <MenuItem value={"friday"}>Friday</MenuItem>
                <MenuItem value={"saturday"}>Saturday</MenuItem>
              </Select>
            </div>
          </div>
          <p>Work days</p>
          <div style={{ paddingLeft: "10px" }}>
            <TimeAssign />
            {/* <Container>
              <TimeAssign />
            </Container> */}
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
                  size="medium"
                >
                  {currency_list?.map((data) => (
                    <MenuItem
                      value={data.name}
                    >{`${data.code} - ${data.name}`}</MenuItem>
                  ))}
                </Select>
                <p>
                  The time zone setting is used for notifications by default.
                </p>
              </FormControl>
            </Box>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HoursCurrency;
