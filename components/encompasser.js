import React, { Component } from 'react'
import styles from '../styles/encompasser.module.css'
import Image from 'next/image'

class encompasser extends Component {
    render() {
        return (
            <div className={styles.encompasser}>
                <div className={styles.display}>
                    {/* <p>VIDEOTHON</p> */}
                        <div className={styles.videothon}>
                            {/* <div>VIDEOTHON</div> */}
                                <Image src="/Hummingbird.svg" height={40} width={40} />     
                        </div>
                </div>
            </div>
        );
    }
}

export default encompasser;