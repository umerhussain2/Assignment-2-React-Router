import React from "react";
import Error404 from "./image/404-error.png";

export const Error = () => {
  return (
    <div className="error">
      <img src={Error404} className="error-img" alt="error" />
    </div>
  );
};
