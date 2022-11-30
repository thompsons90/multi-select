import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
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
        onChange={(event, newTagValue) => {
          setTagValue(newTagValue);
        }}
        onInputChange={(event, newInputValue) => {
          setSelectedTag(newInputValue);
        }}
        renderInput={(params) => (
          <TextField
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
