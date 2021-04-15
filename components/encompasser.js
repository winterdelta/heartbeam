import React, { Component } from 'react'
import styles from '../styles/encompasser.module.css'
import Image from 'next/image'
import Head from 'next/head'

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
                                <div>VIDEO SHOPPING IN THE NORTHERN QUARTER</div>
                                <div>
                                    {/* <span className={styles.dropCharacter}>
                                        <Image src="/Hummingbird.svg" height={150} width={150} />
                                    </span> */}
                                </div>
                                <div className={styles.time}>OFFLINE</div>
                        </div>
                </div>
            </div>
        );
    }
}

export default encompasser;