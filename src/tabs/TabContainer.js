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

export default function TabContainer() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const page1 = [
    { id: 0, header: "Hours Checkbox", page: <CopyCheck /> },
    { id: 1, header: "Departments", page: <Notifications /> },
    { id: 2, header: "MultiSelect", page: <MultiSelect /> },
    { id: 3, header: "Integrations", page: <IntegrationPage /> },
  ];

  return (
    <>
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
          <>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic-tabs-example"
                  variant="scrollable"
                >
                  {page1.map((data) => (
                    <Tab label={data.header} {...a11yProps(data.id)} />
                  ))}
                </Tabs>
              </Box>
              {page1.map((data) => (
                <TabPanel value={value} index={data.id}>
                  {data.page}
                </TabPanel>
              ))}
            </Box>
          </>
        </Box>
      </Modal>
    </>
  );
}

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       // Width of the TabPanel which wraps the child content of the Tabs
//       style={{ width: "100%" }}
//       hidden={value !== index}
//       id={`nav-tabpanel-${index}`}
//       aria-labelledby={`nav-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box p={3}>{children}</Box>}
//     </div>
//   );
// }

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// const TabContainer = ({
//   children1,
//   children2,
//   header1,
//   header2,
//   quantity1,
//   quantity2,
// }) => {
//   const [secondValue, setSecondValue] = useState(0);
//   const handleSettingsChange = (event, newValue) => {
//     setSecondValue(newValue);
//   };
//   const [value, setValue] = useState(0);
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleChange = (e, newValue) => {
//     setValue(newValue);
//   };

//   //   need to be able to map through the data being passed into the tabs
//   //   data to pass: header, content into Modal
//   const page1 = [
//     { id: 0, header: "Clients", page: <ClientPage /> },
//     { id: 1, header: "Departments", page: <DepartmentPage /> },
//     { id: 2, header: "General", page: <GeneralPage /> },
//     { id: 3, header: "Integrations", page: <IntegrationPage /> },
//   ];
//   return (
//     <>
//       {/* we need to pass the amount of guest and pending invites behind header1 & 2 */}
//       {/* <TabHeader label={`${header1} ${quantity1}`} /> */}
//       <Button onClick={handleOpen}>Tab Container</Button>
//       {page1.map((data) => (
//         <>
//           <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//           >
//             <Box sx={{ width: "100%" }}>
//               <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//                 <Tabs
//                   value={value}
//                   onChange={handleChange}
//                   aria-label="basic-tabs-example"
//                 >
//                   <Tab label={data.header} {...a11yProps(data.id)} />
//                 </Tabs>
//               </Box>
//               <Box>
//                 <TabPanel value={value} index={0}>
//                   {data.page}
//                 </TabPanel>
//               </Box>
//             </Box>
//           </Modal>
//         </>
//       ))}
//       {/* <AppBar position="static">
//         <TabPanel
//         value={secondValue}
//           onChange={handleSettingsChange}
//           aria-label="styled tabs example"
//           >

//           {header1}
//           HEADRRR
//           </TabPanel>
//       </AppBar>
//       <TabPanel value={secondValue} index={0}>
//         {children1}
//         PASS ME PLEASE
//       </TabPanel> */}
//     </>
//   );
// };

// export default TabContainer;
