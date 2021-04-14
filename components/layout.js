import React from "react";
import Compass from "./compass";
import HUD from './hud'

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <Compass />
      </div>
      {children}
      <div>
        <HUD/>
      </div>
    </div>
  );
}
