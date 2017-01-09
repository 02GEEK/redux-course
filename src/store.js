import {createStore} from 'redux';



function counter(state=0,action){
	switch(action.type){
		case STEP_UP:
			return state+1;
		case STEP_DOWN:
			return state-1;
		default:
			return state;
	}
}


export const STEP_UP = "stepUp";
export const STEP_DOWN = "stepDown";

//const store = 

export default createStore(counter);