import {createStore,combineReducers} from 'redux';
import * as T from './store/types';


export default createStore(combineReducers({
	counters,
	board
}));

function board(state={color1:"black",color2:"white"},{type,color1,color2}){
	switch(type){
		case T.BOARD_COLOR:

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
		case T.ADD_COUNTER:
			return [
				...state,
				0
			];
		case T.STEP_UP:
			//state[index]++ NO
			return [
				...state.slice(0,index),
				   state[index]+1,
				...state.slice(index+1)
			];
		case T.STEP_DOWN:
			return [
				...state.slice(0,index),
				   state[index]-1,
				...state.slice(index+1)
			];
		default:
			return state;
	}
}