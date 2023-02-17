import React, { useState } from "react";
import { CopyCheck } from "./a1Check/CopyCheck";
import Child from "./components/Child";
import Combo from "./components/Combo";
import IntegrationPage from "./pages/Integrations";
import TabContainer from "./tabs/TabContainer";
import MultiSelect from "./testCode/MultiSelect";

const Parent1 = () => {
  const [tabOne, setTabOne] = useState([
    { id: 0, header: "Hours Checkbox", page: <CopyCheck /> },
    { id: 1, header: "Combo", page: <Combo /> },
    { id: 2, header: "MultiSelect", page: <MultiSelect /> },
    { id: 3, header: "Integrations", page: <IntegrationPage /> },
  ]);
  const [tabButtons, setTabButtons] = useState([
    { id: 0, label: "Open Modal" },
    { id: 1, label: "Submit" },
    { id: 2, label: "Cancel" },
  ]);

  return (
    <>
      <TabContainer tabOne={tabOne} tabButtons={tabButtons} />
      {/* <Child tabOne={tabOne} /> */}
    </>
  );
};

export default Parent1;
