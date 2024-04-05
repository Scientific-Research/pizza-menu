import React from "react";
import "./index.css";

export const PageNotFound: React.FC = () => {
  // window.open("/src/view/PageNotFound.html", "_blank");
  window.open("/PageNotFound.html", "_blank");

  return (
    <div>
      {/* <h1>404 - Page Not Found</h1>
      <p>Oops! Looks like you've wandered off the pizza trail.</p> */}
      {/* <Navigate to="PageNotFound.html" />; */}
    </div>
  );
};
