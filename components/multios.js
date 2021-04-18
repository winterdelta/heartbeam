import React, { Component } from 'react'
import styles from '../styles/multios.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Legal from '../components/legal'

class encompasser extends Component {
    render() {
        return (
            <div className={styles.encompasser}>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@1,100&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <div className={styles.display}>
                        <div className={styles.videothon}>
                                <div>THIS IS AN INSTANCE OF THE MULTI-OS HESPERIDÉ BUILD Q3</div>
                                <div className={styles.legal}><Legal/></div>
                        </div>
                </div>
            </div>
        );
    }
}

export default encompasser;