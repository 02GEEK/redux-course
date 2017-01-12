import React, {Component} from 'react';
import './board.css';

class Board extends Component{
	render(){
		const {counters, board} = this.props.data,
				width = counters[0] || 0,
				height = counters[1] || 0;

		let lines = new Array(height),
			isColorOne = true;

		for(let i=0,j; i<height; i++){
			let boxes = new Array(width);
			for(j=0; j<width; j++){
				boxes[j] = <div className="Board-box" key={j} style={{background:isColorOne?board.color1:board.color2}} />;
				isColorOne = !isColorOne;
			}
			if(j%2===0) isColorOne = !isColorOne; 

			lines[i] = <div className="Board-line" key={i}>{boxes}</div>;
		}

		return (
			<div className="Board">
				This is the board.<br/>
				{lines}
			</div>	
		);
	}
}

export default Board;