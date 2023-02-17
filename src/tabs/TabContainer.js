import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Modal,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import GeneralPage from "../pages/General";
import IntegrationPage from "../pages/Integrations";

import PropTypes from "prop-types";

import { CopyCheck } from "../a1Check/CopyCheck";
import Notifications from "../Notifications";
import MultiSelect from "../testCode/MultiSelect";
import Combo from "../components/Combo";

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

export default function TabContainer(props) {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const tabOne = props.tabOne;
  const tabButtons = props.tabButtons;

  // const content = props;
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  // const page1 = [
  //   { id: 0, header: "Hours Checkbox", page: <CopyCheck /> },
  //   { id: 1, header: "Combo", page: <Combo /> },
  //   { id: 2, header: "MultiSelect", page: <MultiSelect /> },
  //   { id: 3, header: "Integrations", page: <IntegrationPage /> },
  // ];
  // console.log(puppet);
  console.log(props, tabButtons);

  return (
    <>
      {
        tabButtons?.map((data) => (
          <Button onClick={handleOpen}>{data.label}</Button>
        ))[0]
      }
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
            width: 700,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic-tabs-example"
                  // variant="scrollable"
                >
                  {tabOne?.map((data) => (
                    <Tab label={data.header} {...a11yProps(data.id)} />
                  ))}
                </Tabs>
              </Box>
              {tabOne?.map((data) => (
                <TabPanel value={value} index={data.id} key={data.id}>
                  {data.page}
                </TabPanel>
              ))}
              {tabButtons?.map((data) => (
                <Button onClick={handleOpen}>{data.label}</Button>
              ))}
            </Box>
          </>
        </Box>
      </Modal>
    </>
  );
}
