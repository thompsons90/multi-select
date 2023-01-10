import React, { useState, useContext } from "react";
import {
  AppBar,
  Box,
  Button,
  Modal,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import GeneralPage from "../pages/General";
import ClientPage from "../pages/Client";
import DepartmentPage from "../pages/Department";
import IntegrationPage from "../pages/Integrations";
import NotificationPage from "../pages/Notifications";
import PreferencePage from "../pages/Preferences";
import TimePage from "../pages/Time";
import { AppContext } from "./AppContext";

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

export default function TabsTwo() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [sidebarStatus, setSidebarStatus] = useContext(AppContext);
  const [status, setStatus] = useState(true);
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e, newValue) => {
    setFirstValue(newValue);
    if (firstValue === 1) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };
  const handleSettingsChange = (event, newValue) => {
    if (status) {
      setSecondValue(newValue);
    }
  };
  const handleManageChange = (event, newValue) => {
    if (!status) {
      setSecondValue(newValue);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>Basic Tabs</Button>
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
          <div className={`body ${sidebarStatus ? "body__active" : ""}`}>
            <div className="Settings__container">
              <div className="root">
                <div className="demo1">
                  <Tabs
                    value={firstValue}
                    onChange={handleChange}
                    aria-label="ant example"
                  >
                    <Tab label="Settings" />
                    <Tab label="Manage" />
                  </Tabs>
                </div>
                {status ? (
                  <div className="demo2">
                    <AppBar className="appbar" position="static">
                      <Tabs
                        value={secondValue}
                        onChange={handleSettingsChange}
                        aria-label="styled-tabs-example"
                      >
                        <Tab label="General" />
                        <Tab label="Preferences" />
                        <Tab label="Notifications" />
                        <Tab label="Integrations" />
                      </Tabs>
                    </AppBar>
                    <TabPanel value={secondValue} index={0}>
                      <GeneralPage />
                    </TabPanel>
                    <TabPanel value={secondValue} index={1}>
                      <PreferencePage />
                    </TabPanel>
                    <TabPanel value={secondValue} index={2}>
                      <NotificationPage />
                    </TabPanel>
                    <TabPanel value={secondValue} index={3}>
                      <IntegrationPage />
                    </TabPanel>
                  </div>
                ) : (
                  <div className="demo2">
                    <AppBar className="appbar" position="static">
                      <Tabs
                        value={secondValue}
                        onChange={handleManageChange}
                        aria-label="styled tabs example"
                      >
                        {/* <Tab label="Guests" /> */}
                        <Tab label="Time Off" />
                        <Tab label="Departments" />
                        <Tab label="Clients" />
                      </Tabs>
                    </AppBar>
                    <TabPanel value={secondValue} index={0}>
                      <TimePage />
                    </TabPanel>
                    <TabPanel value={secondValue} index={1}>
                      <DepartmentPage />
                    </TabPanel>
                    <TabPanel value={secondValue} index={2}>
                      <ClientPage />
                    </TabPanel>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
