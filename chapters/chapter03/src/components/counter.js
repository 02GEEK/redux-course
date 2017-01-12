import React, {Component} from 'react';
import store, {STEP_UP,STEP_DOWN} from '../store';

class Counter extends Component{
	constructor(props){
		super(props);

		this.stepUp = this.stepUp.bind(this);
		this.stepDown = this.stepDown.bind(this);
			
	}
	
	stepUp(){
		const {index} = this.props;

		store.dispatch({type:STEP_UP, index});
	}

	stepDown(){
		const {index} = this.props;
		
		store.dispatch({type:STEP_DOWN,index});
	}

	render(){
		return (
			<div>
				<h2>{this.props.counter}</h2>
				<button onClick={this.stepUp}>+</button>
				<button onClick={this.stepDown}>-</button>
			</div>	
		);
	}
}

export default Counter;