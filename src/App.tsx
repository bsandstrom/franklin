import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChartExample } from './ChartExample';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        header!
      </header> */}

        <h1>
          Proposed Bond Budget Breakdown
        </h1>
        
        <ChartExample />
    </div>
  );
}

export default App;
