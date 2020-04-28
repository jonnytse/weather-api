import React, { Component } from 'react';
import styles from './App.module.scss';
import Header from '../../components/Header';


class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
      </div>
    );
  }  
}

export default App;
