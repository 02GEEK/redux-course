import React, {Component} from 'react';

class Counter extends Component{
	constructor(props){
		super(props);

		this.state = {counter:0};

		this.stepUp = this.stepUp.bind(this);
		this.stepDown = this.stepDown.bind(this);
			
	}

	stepUp(){
		this.setState({counter:this.state.counter+1});
	}

	stepDown(){
		this.setState({counter:this.state.counter-1});
	}

	render(){
		return (
			<div>
				<h2>{this.state.counter}</h2>
				<button onClick={this.stepUp}>+</button>
				<button onClick={this.stepDown}>-</button>
				{/*<button onClick={()=>{
					this.setState({counter:this.state.counter-1})
				}}>-</button>	*/}
			</div>	
		);
	}
}

export default Counter;