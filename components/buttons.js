import React, { Component } from "react";
import styles from "../styles/buttons.module.css";
import { PlayFilledAlt32 } from "@carbon/icons-react";
import { Launch16 } from "@carbon/icons-react";
import Donate from './donate'
import Head from 'next/head'
import Link from 'next/link'

class buttons extends Component {
  render() {
    return (
      <div className={styles.buttons}>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@1,100&display=swap"
                    rel="stylesheet"
                />
            </Head>
        <div className={styles.buttonArray}>
          {/* <div>
            <PlayFilledAlt32 />
          </div> */}
          {/* <div>R&D FUND</div> */}
          {/* <Donate/> */}
          <Link href="https://muse.ai/v/vbPNG3y">
            <div>
              INFOMERCIAL{" "}
              <span className={styles.spacing}>
                <Launch16 />
              </span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default buttons;
