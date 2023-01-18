import React, { useState, useContext } from "react";
import { Box, Button, Modal, Tab, Tabs, Typography } from "@mui/material";
// import { Box } from "@mui/system";

import PropTypes from "prop-types";
import GeneralPage from "../pages/General";
import PreferencePage from "../pages/Preferences";
import NotificationPage from "../pages/Notifications";
import { CopyCheck } from "../a1Check/CopyCheck";

function TabPanel(props) {
  const { children, index, value, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabExample() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Tab Example</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            // display: "flex",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic-tabs-example"
              >
                <Tab label="General" {...a11yProps(0)} />
                <Tab label="Preferences" {...a11yProps(1)} />
                <Tab label="Notifications" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <CopyCheck />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <PreferencePage />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <NotificationPage />
            </TabPanel>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}