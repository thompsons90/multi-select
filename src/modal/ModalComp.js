import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

export const ModalComp = () => {
  const [open, setOpen] = useState(false);
  const [inviteStatus, setInviteStatus] = useState("guests");
  const GuestAcc = [
    { id: 1, userName: "Bob" },
    { id: 2, userName: "Sarah" },
    { id: 3, userName: "Larry" },
  ];
  const handleStatusChange = (e, id, newStatus) => {
    setInviteStatus(newStatus);
    console.log(`ID: ${id}`);
  };
  console.log(inviteStatus);
  return (
    <>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        style={{ width: "100px" }}
      >
        Invite
      </Button>

      <div>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <DialogTitle id="dialog-title">Header/Title</DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-description">
              Here is the content of the modal
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* Pass state and setter for opening and closing modal */}
            {/* Props: state, button labels, children, header */}
            <Button variant="contained" onClick={() => setOpen(false)}>
              Submit
            </Button>
            <Button variant="contained" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      {/* </div> */}
    </>
  );
};
