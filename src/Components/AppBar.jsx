import React from "react";

const MyAppBar = (props) => {
  return (
    <div style={{ backgroundColor: "var(--main)" }}>
      <div className="row">
        <h2 style={{ color: "var(--default)", marginLeft: "1rem" }}>BookApp</h2>
        <form
          className="row"
          style={{ marginRight: "1rem" }}
          onSubmit={props.submit}
        >
          <input
            type="text"
            onChange={props.change}
            placeholder="Search"
            style={{ width: "8rem", height: "1.5rem", marginRight: "1rem" }}
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyAppBar;
