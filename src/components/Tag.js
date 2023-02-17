import React, { useState } from "react";
import { Autocomplete, Chip, TextField } from "@mui/material";
import { options2 } from "../utils/data";

const Tag = () => {
  const [tagValue, setTagValue] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  // console.log(`tags: ${tagValue}`);
  // console.log(`Selected: ${selectedTag}`);

  const addInput = (tag) => {
    let newTag = tag;
    setTagValue([...tagValue, newTag]);
    setSelectedTag("");
  };
  // console.log(`SELECTED TAG: ${selectedTag} TAG VALUE: ${tagValue}`);
  return (
    <>
      <h2>Tags</h2>
      <Autocomplete
        multiple
        freeSolo
        limitTags={4}
        disableCloseOnSelect
        value={tagValue}
        options={tagValue}
        // onChange={(event, newTagValue) => {
        //   setTagValue(newTagValue);
        // }}
        // onInputChange={(event, newInputValue) => {
        //   setSelectedTag(newInputValue);
        // }}
        renderOption={(props, option) => (
          <>
            <div style={{ display: "flex", width: "100%" }}>
              {/* I'M NOT SURE WHY BUT: I had to change option.id/name/score to props.id/name/score */}
              {/* <Chip size="small" label={`${option.id}`} />
              <div className="multi-select-options">
                {option.userName} {"-  "}
                {option.performanceScore}%
              </div> */}
              <li {...props}>
                <Chip size="small" label={`${option}`} />
              </li>
            </div>
          </>
        )}
        renderInput={(params) => (
          <TextField
            onChange={(newValue) => {
              setSelectedTag(newValue.target.value);
            }}
            variant="outlined"
            {...params}
            inputProps={{
              ...params.inputProps,
              onKeyDown: (e) => {
                if (e.key === "Enter") {
                  e.stopPropagation();
                }
              },
            }}
            label="Tags"
            placeholder="Tags"
          />
        )}
      />
      <button
        style={{
          visibility:
            selectedTag && selectedTag.length !== 0 ? "visible" : "hidden",
        }}
        onClick={() => addInput(selectedTag)}
      >
        Add {selectedTag}
      </button>
    </>
  );
};

export default Tag;
