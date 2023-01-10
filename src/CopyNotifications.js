import { Box, FormControl, MenuItem, Select } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";
import { MemoizedNavbar } from "../../../src/components/Navbar";
import Sidebar from "../../../src/components/settings/Sidebar";

const Notifications = (props) => {
  // Holds state for the schedule emails day selector
  const [scheduleDay, setScheduleDay] = useState("monday");
  // Holds state for the time tracking reminder emails day selector
  const [timeTrackingDay, setTimeTrackingDay] = useState("monday");
  // Holds state for the schedule emails frequency toggle button
  const [scheduleFrequency, setScheduleFrequency] = useState("never");
  // Holds state for the time tracking emails frequency toggle button
  const [timeTrackingFrequency, setTimeTrackingFrequency] = useState("never");

  // Day Select Logic
  const handleScheduleDayChange = (event) => {
    setScheduleDay(event.target.value);
  };
  const handleTimeTrackingDayChange = (event) => {
    setTimeTrackingDay(event.target.value);
  };

  // Frequency Button Logic

  const handleScheduleFrequencyChange = (event, newFrequency) => {
    setScheduleFrequency(newFrequency);
  };
  const handleTimeTrackingFrequencyChange = (event, newFrequency) => {
    setTimeTrackingFrequency(newFrequency);
  };

  return (
    <main>
      <MemoizedNavbar />
      <Sidebar />
      <section className="settings-container">
        <div className="header">
          <h2>Notifications</h2>
          <p>Set up automatic schedule emails and time tracking reminders.</p>
        </div>
        <div>
          <div
            className="general-container"
            style={{
              border: "2px solid gray",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <h2 style={{ fontWeight: "bold" }}>Schedule emails</h2>
            <p>
              Set up automatic schedule emails and time tracking reminders.
              <a
                href=""
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "blue",
                  fontWeight: "bold",
                }}
              >
                {" "}
                <span>See example</span>
              </a>
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {/* could add another line; flex-wrap: 'wrap' */}
              <div style={{ marginRight: "10px" }}>
                <p>Frequency</p>
                <ToggleButtonGroup
                  color="primary"
                  value={scheduleFrequency}
                  exclusive
                  onChange={handleScheduleFrequencyChange}
                  aria-label="Platform"
                >
                  <ToggleButton
                    value="never"
                    style={{
                      border: "2px solid #eee",
                      padding: "5px",
                      borderRadius: "5px",
                      margin: "5px",
                    }}
                  >
                    never
                  </ToggleButton>
                  <ToggleButton
                    value="daily"
                    style={{
                      border: "2px solid #eee",
                      padding: "5px",
                      borderRadius: "5px",
                      margin: "5px",
                    }}
                  >
                    daily
                  </ToggleButton>
                  <ToggleButton
                    value="weekly"
                    style={{
                      border: "2px solid #eee",
                      padding: "5px",
                      borderRadius: "5px",
                      margin: "5px",
                    }}
                  >
                    weekly
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>

              <div>
                <Box sx={{ minWidth: 300 }}>
                  <p>When?</p>
                  {/* The following div is needed for styling purposes if we keep the InputLabel */}
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p>Each </p>
                    <FormControl
                      sx={{
                        // width: 300,
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <div>
                        {/* <InputLabel id="demo-simple-select-label">day</InputLabel> */}
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={scheduleDay}
                          onChange={handleScheduleDayChange}
                          style={{
                            border: "2px solid #eee",
                            padding: "10px 20px 10px 5px",
                            borderRadius: "5px",
                            margin: "5px",
                            backgroundColor: "#eee",
                          }}
                          sx={{ width: 125 }}
                          //   size="small"
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
                    </FormControl>
                    <p> before 7am</p>
                  </div>
                </Box>
              </div>
            </div>
            <h4 style={{ fontWeight: "bold" }}>Who receives this email?</h4>
            <p>Everyone in the schedule with an associated email address.</p>
            <h4 style={{ fontWeight: "bold" }}>
              What happens when the schedule is updated?
            </h4>
            <p>
              Watdo will send an update to the people affected by the change so
              they're always working on the right thing.
            </p>
          </div>

          <div
            style={{
              border: "2px solid black",
              borderRadius: "10px",
              marginTop: "20px",
              padding: "10px",
            }}
          >
            <h2 style={{ fontWeight: "bold" }}>
              Time tracking reminder emails
            </h2>
            <p>
              Send a reminder email to anyone who hasn't logged enough time.{" "}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p>Frequency</p>
                <ToggleButtonGroup
                  color="primary"
                  value={timeTrackingFrequency}
                  exclusive
                  onChange={handleTimeTrackingFrequencyChange}
                  aria-label="Platform"
                >
                  <ToggleButton
                    value="never"
                    style={{
                      border: "2px solid #eee",
                      padding: "5px",
                      borderRadius: "5px",
                      margin: "5px",
                    }}
                  >
                    never
                  </ToggleButton>
                  <ToggleButton
                    value="daily"
                    style={{
                      border: "2px solid #eee",
                      padding: "5px",
                      borderRadius: "5px",
                      margin: "5px",
                    }}
                  >
                    daily
                  </ToggleButton>
                  <ToggleButton
                    value="weekly"
                    style={{
                      border: "2px solid #eee",
                      padding: "5px",
                      borderRadius: "5px",
                      margin: "5px",
                    }}
                  >
                    weekly
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>

              <div>
                <Box sx={{ minWidth: 300 }}>
                  <p>When?</p>
                  {/* The following div is needed for styling purposes if we keep the InputLabel */}
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p>Each </p>
                    <FormControl
                      sx={{
                        width: 300,
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <div>
                        {/* <InputLabel id="demo-simple-select-label">day</InputLabel> */}
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={timeTrackingDay}
                          onChange={handleTimeTrackingDayChange}
                          style={{
                            border: "2px solid #eee",
                            padding: "10px 20px 10px 5px",
                            borderRadius: "5px",
                            margin: "5px",
                            backgroundColor: "#eee",
                          }}
                          sx={{ width: 125 }}
                          //   size="small"
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
                    </FormControl>
                    <p> before 7am</p>
                  </div>
                </Box>
              </div>
            </div>
            <h4 style={{ fontWeight: "bold" }}>Who receives this email?</h4>
            <p>
              Anyone who has logged less than 50% of their capacity during the
              previous work week.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Notifications;
