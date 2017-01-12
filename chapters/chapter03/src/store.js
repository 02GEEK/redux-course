import {createStore} from 'redux';

export const STEP_UP = "stepUp";
export const STEP_DOWN = "stepDown";
export default createStore(counters);


function counters(state=[0,0,0],{type,index}){
	switch(type){
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