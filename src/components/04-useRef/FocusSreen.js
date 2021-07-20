import React, { useRef } from "react";
import "./ref.css";

export const FocusSreen = () => {
  const inputRef = useRef();

  const handleClick = (e) => {
    inputRef.current.select();
  };
  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input
        className="form-control"
        placeholder="Su nombre..."
        ref={inputRef}
      />
      <button className="btn btn-primary mt-3" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
