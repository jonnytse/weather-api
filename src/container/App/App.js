import React, { Component } from 'react';
import styles from './App.module.scss';
import Header from '../../components/Header';
import Routes from '../../routes/Routes';


class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <Routes />
        <h1>Hello</h1>
      </div>
    );
  }  
}

export default App;
