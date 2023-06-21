import React, { useState } from "react";

import { SearchIcon } from "../../assets/icons/SearchIcon";

import "./Search.css";

export default function Search() {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="inputContainer">
      <div className="search">
        <SearchIcon />
        <input
          className="inputSearch"
          type="text"
          id="search"
          value={value}
          name="search"
          placeholder="Search for anything..."
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
    </div>
  );
}
