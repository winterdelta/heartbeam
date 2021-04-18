import React from "react";
import Compass from "./compass";
import HUD from "./hud";
import Buttons from "./buttons";
import Legal from "./legal";

export default function Layout({ children }) {
  return (
    <div>
      <Compass />
      {children}
      {/* <HUD /> */}
      <Buttons />
    </div>
  );
}
