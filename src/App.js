import React, { Component } from 'react';
import {connect} from 'react-redux';

import logo from './logo.svg';
import './App.css';

import Counter from './components/counter';
import Board from './components/board';

import {addCounterAction} from './store/actions';

const mapStateToProps  = ({counters})=>{
    return {counters};
};

const mapDispatchToProps = (dispatch)=>{
  return {onClick:()=>{
    dispatch(addCounterAction());
  }};
}


const Button = ({onClick,counters})=>{
  return <button onClick={onClick}>Add ({counters.length})</button>
};

const ButtonContext = connect(mapStateToProps,mapDispatchToProps)(Button);



class App extends Component {
  render() {
    const {store} =this.context,
          data = store.getState(),
          total = data.counters.reduce((a,b)=>a+b,0);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Redux 3.2 ({total}) <ButtonContext /></h2>
        </div>
        <div className="App-info">
          {data.counters.map((v,index)=> <Counter counter={v} index={index} key={index} /> )}
        </div>
        <Board data={data} />
        
      </div>
    );
  }
}
App.contextTypes = {store:React.PropTypes.object};


export default App;
