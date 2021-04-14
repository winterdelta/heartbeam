import React, { Component } from 'react';
import styles from '../styles/hud.module.css'

class hud extends Component {
    render() {
        return (
            <div className={styles.hud}>
                <span className={styles.bold}>MULTI-OS</span> HESPERIDÉ Q3/4
            </div>
        );
    }
}

export default hud;