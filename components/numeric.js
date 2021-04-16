import React, { Component } from 'react'
import styles from '../styles/encompasser.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

class encompasser extends Component {
    render() {
        return (
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
                                <div className={styles.tag}>GEOMETER</div>
                                {/* <div className={styles.organizer}>
                                    <div className={styles.shop}></div>
                                    <div className={styles.time}></div>
                                </div> */}
                                    <span className={styles.dropCharacterActive}>
                                        <Link href="https://winterdelta.medium.com/">
                                            <Image src="/Dragonfly.svg" height={150} width={150} />
                                        </Link>
                                    </span>
                                <div className={styles.status}>ONLINE</div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default encompasser;