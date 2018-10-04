import React, { Component } from 'react';
import MyMultiComponent from './components/MyMultiComponent'
import { MyListProvider } from './components/MyListProvider'
import { MyFooProvider } from './components/MyFooProvider'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyListProvider>
          <MyFooProvider>
            <MyMultiComponent/>
          </MyFooProvider>
        </MyListProvider>
      </div>
    );
  }
}

export default App;
