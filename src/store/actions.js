import * as T from './types';
import store from '../store';

export function addCounterAction(){
	return {type:T.ADD_COUNTER};
}

export function addCounter(){
    store.dispatch({type:T.ADD_COUNTER});
}

export function stepUpAction(index){
	return {type:T.STEP_UP, index}
}

export function stepUp(index){
	store.dispatch(stepUpAction(index));
}

export function stepDownAction(index){
	return {type:T.STEP_DOWN, index}
}

export function stepDown(index){
	store.dispatch(stepUpAction(index));
}


