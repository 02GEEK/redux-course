import {createStore,combineReducers} from 'redux';

export const STEP_UP = "stepUp";
export const STEP_DOWN = "stepDown";
export const ADD_COUNTER = "addCounter";

export const BOARD_COLOR = "boardColor";

export default createStore(combineReducers({
	counters,
	board
}));

function board(state={color1:"black",color2:"white"},{type,color1,color2}){
	switch(type){
		case BOARD_COLOR:

			return {
				...state,
				color1,
				color2
			};
		default:
			return state;
	}
}


function counters(state=[],{type,index}){
	switch(type){
		case ADD_COUNTER:
			return [
				...state,
				0
			];
		case STEP_UP:
			//state[index]++ NO
			return [
				...state.slice(0,index),
				   state[index]+1,
				...state.slice(index+1)
			];
		case STEP_DOWN:
			return [
				...state.slice(0,index),
				   state[index]-1,
				...state.slice(index+1)
			];
		default:
			return state;
	}
}