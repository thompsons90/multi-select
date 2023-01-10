import React, { useState } from "react";
import ButtonGroup1 from "./Buttons/ButtonGroup1";
import SelectDay from "./Select/Select";

const Notifications = () => {
  return (
    <div style={{ border: "2px solid green", padding: "5px" }}>
      <div
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
            <span>See example</span>
          </a>
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <ButtonGroup1 />
          </div>

          <div>
            <SelectDay />
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
        <h2 style={{ fontWeight: "bold" }}>Time tracking reminder emails</h2>
        <p>Send a reminder email to anyone who hasn't logged enough time. </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <ButtonGroup1 />
          </div>

          <div>
            <SelectDay />
          </div>
        </div>
        <h4 style={{ fontWeight: "bold" }}>Who receives this email?</h4>
        <p>
          Anyone who has logged less than 50% of their capacity during the
          previous work week.
        </p>
      </div>
    </div>
  );
};
export default Notifications;
