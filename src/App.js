import React, { Component } from 'react';
import Card from './components/Card';
import TitleText from './components/TitleText';
import TotalInfo from './components/TotalInfo';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleText>Selecionar ingressos</TitleText> 
        <Card />
        <TotalInfo />
      </div>
    );
  }
}

export default App;
