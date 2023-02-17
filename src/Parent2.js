import React, { useState } from "react";
import { CopyCheck } from "./a1Check/CopyCheck";
import Child from "./components/Child";
import Combo from "./components/Combo";
import IntegrationPage from "./pages/Integrations";
import TabContainer from "./tabs/TabContainer";
import MultiSelect from "./testCode/MultiSelect";

const Parent2 = () => {
  const [tabOne, setTabOne] = useState([
    { id: 0, header: "MultiSelect", page: <MultiSelect /> },
    { id: 1, header: "Integrations", page: <IntegrationPage /> },
    { id: 2, header: "Combo", page: <Combo /> },
    { id: 3, header: "Hours Checkbox", page: <CopyCheck /> },
  ]);

  return (
    <>
      <TabContainer tabOne={tabOne} />
    </>
  );
};

export default Parent2;

// import React, { useState } from "react";
// import BlogList from "./Child2";

// const Parent2 = () => {
//   const [blogs, setBlogs] = useState([
//     { id: 1, author: "A", title: "Title1" },
//     { id: 2, author: "B", title: "Title2" },
//     { id: 3, author: "C", title: "Title3" },
//   ]);

//   return (
//     <div>
//       <BlogList blogs={blogs} />
//     </div>
//   );
// };
// export default Parent2;
