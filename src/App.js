import React, { Component } from 'react';
import MyListComponent from './components/MyListComponent'
import { MyListProvider } from './components/MyListProvider'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyListProvider>
            <MyListComponent/>
        </MyListProvider>
      </div>
    );
  }
}

export default App;
