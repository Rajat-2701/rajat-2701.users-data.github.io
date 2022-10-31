import React from "react";
import "./SearchUsers.css";

export default function SearchUsers({ placeholder, handleChange }) {
  return (
    <div className="search-box">
      <input type="search" className="search" placeholder={placeholder} onChange={handleChange} />
    </div>
  );
}
