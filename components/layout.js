import React from "react";
import Compass from "./compass";

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <Compass />
      </div>
      {children}
    </div>
  );
}
