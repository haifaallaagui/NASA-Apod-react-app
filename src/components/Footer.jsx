import React from "react";

export default function Footer(props) {
  const { data, setShowS } = props;
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>{data?.title} </h2>
        <h1>APOD PROJECT BY AICHA</h1>
      </div>
      <button
        onClick={() => {
          setShowS(true);
        }}
      >
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
