import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './components/counter';
import store, {ADD_COUNTER} from './store';

class App extends Component {
  
  addCounter(){
    store.dispatch({type:ADD_COUNTER});
  }

  render() {
    const {data} = this.props,
          total = data.reduce((a,b)=>a+b,0);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Redux 3.2 ({total})</h2>
        </div>
        <div className="App-counters">
          {data.map((v,index)=> <Counter counter={v} index={index} key={index} /> )}

        </div>
        
      </div>
    );
  }
}

export default App;
