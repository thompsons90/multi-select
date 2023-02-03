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
import ClientPage from "../pages/Client";
import DepartmentPage from "../pages/Department";
import GeneralPage from "../pages/General";
import IntegrationPage from "../pages/Integrations";
import FormDialog from "./FormDialog";
import TabContainer from "../tabs/TabContainer";

export const ModalComp = ({ header, header1, children1, content }) => {
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

  const page1 = [
    { id: 0, header: "Clients", page: <ClientPage /> },
    { id: 1, header: "Departments", page: <DepartmentPage /> },
    { id: 2, header: "General", page: <GeneralPage /> },
    { id: 3, header: "Integrations", page: <IntegrationPage /> },
  ];

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        style={{ width: "100px" }}
      >
        Invite
      </Button>

      {/* Pass state and setter for opening and closing modal */}
      {/* Props: state, button labels, children, header */}
      <div>
        {page1.map((data) => (
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
          >
            <DialogTitle>{data.header}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <TabContainer />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={() => setOpen(false)}>
                Submit
              </Button>
              <Button variant="contained" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        ))}
      </div>

      {/* <div>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <DialogTitle id="dialog-title">Header/Title</DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-description">
              {content}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
           
            <Button variant="contained" onClick={() => setOpen(false)}>
              Submit
            </Button>
            <Button variant="contained" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div> */}
      {/* </div> */}
    </>
  );
};
