import React, { Component } from 'react';
import styles from './Header.module.scss';

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <h1>Weather API React App practice</h1>
            </div>
        )
    }
}

export default Header;