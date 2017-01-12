import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import store from './store';

function render(){
	ReactDOM.render(
	  <App data={store.getState()} />,
	  document.getElementById('root')
	);	
}

render();

store.subscribe(render)


