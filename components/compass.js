import React, { Component } from 'react'
import styles from '../styles/compass.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default class compass extends Component {
  render() {
    return (
      <div>
          <div className={styles.compass}>
                <Link href="/">
                <div className={styles.badge}></div>
                </Link>
          </div>
      </div>
    )
  }
}