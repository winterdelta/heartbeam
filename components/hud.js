import React, { Component } from "react";
import styles from "../styles/hud.module.css";
import Legal from "./legal";

class hud extends Component {
  render() {
    return (
      <div className={styles.hud}>
        <div>
            <span className={styles.bold}>MULTI-OS</span> HESPERIDÉ Q3/4
        </div>
        <Legal />
      </div>
    );
  }
}

export default hud;
