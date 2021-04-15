import React, { Component } from 'react'
import styles from '../styles/encompasser.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

class encompasser extends Component {
    render() {
        return (
            <Link href="https://winterdelta.medium.com/">
                <div className={styles.encompasser}>
                    <Head>
                        <link rel="preconnect" href="https://fonts.gstatic.com" />
                        <link
                            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@1,100&display=swap"
                            rel="stylesheet"
                        />
                    </Head>
                    <div className={styles.display}>
                        {/* <p>VIDEOTHON</p> */}
                            <div className={styles.videothon}>
                                {/* <div>VIDEOTHON</div> */}
                                <div className={styles.legal}>GEOMETER</div>
                            </div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default encompasser;