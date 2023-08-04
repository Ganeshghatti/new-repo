import React from "react";
import "./Searchbar.scss"

export default function Searchbar() {
  return (
    <section className="search-bar">
      <label htmlFor="searchicon">
        <i className="fa-solid fa-magnifying-glass" />
      </label>
      <input
        className="search"
        placeholder="Search for Shows"
        id="searchicon"
      />
    </section>
  );
}
