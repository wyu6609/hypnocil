import React from "react";

function Header({ setSearchInput }) {
  const searchHandler = (event) => {
    setSearchInput(event.target.value);
  };
  return (
    <header>
      <div>
        <img src="./images/hypnocil-logo.png" />
        <h1>Clinical Trials</h1>
      </div>
      <input
        id="search"
        type="text"
        placeholder="Search..."
        onChange={searchHandler}
      ></input>
    </header>
  );
}

export default Header;
