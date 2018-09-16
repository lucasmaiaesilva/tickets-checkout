import React, { Component } from 'react';
import Card from './components/Card';
import TotalText from './components/TotalText';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TotalText title="Selecionar ingressos" /> 
        <Card />
      </div>
    );
  }
}

export default App;
