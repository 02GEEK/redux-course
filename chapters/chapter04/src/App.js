import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './components/counter';
import Board from './components/board';

import store, {ADD_COUNTER} from './store';

class App extends Component {
  
  addCounter(){
    store.dispatch({type:ADD_COUNTER});
  }

  render() {
    const {data} = this.props,
          total = data.counters.reduce((a,b)=>a+b,0);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Redux 3.2 ({total}) <button onClick={this.addCounter}>Add</button></h2>
        </div>
        <div className="App-info">
          {data.counters.map((v,index)=> <Counter counter={v} index={index} key={index} /> )}
        </div>
        <Board data={data} />
        
      </div>
    );
  }
}

export default App;
