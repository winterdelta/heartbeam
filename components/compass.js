import React, { Component } from 'react'
import styles from '../styles/compass.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default class compass extends Component {
  render() {
    return (
      <div>
          <Head>
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link
                href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@1,100&display=swap"
                rel="stylesheet"
              />
          </Head>
          <div className={styles.compass}>
                <Link href="/">
                <div className={styles.badge}>W∆</div>
                </Link>
          </div>
      </div>
    )
  }
}