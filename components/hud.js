import React, { Component } from "react";
import styles from "../styles/hud.module.css";
import Legal from "./legal";
import Head from 'next/head'

class hud extends Component {
  render() {
    return (
      <div className={styles.hud}>
          <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@1,100&display=swap" rel="stylesheet"/>            
          </Head>
        <div>
            <span className={styles.bold}>MULTI-OS</span> HESPERIDÉ Q3/4
        </div>
        <Legal />
      </div>
    );
  }
}

export default hud;
