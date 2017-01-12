import store, {STEP_UP,STEP_DOWN,ADD_COUNTER,BOARD_COLOR} from './store';
import deepFreeze from 'deep-freeze'

it('changing color', ()=>{
	const state = store.getState();

	deepFreeze(state);	

	store.dispatch({type:BOARD_COLOR, color1:'red', color2:'yellow'});
	expect(store.getState()).toEqual({
		counters:[],
		board:{color1:'red', color2:'yellow'}})
});

it('starting up with 3 counters',()=>{
	store.dispatch({type:ADD_COUNTER});
	store.dispatch({type:ADD_COUNTER});
	store.dispatch({type:ADD_COUNTER});
	expect(store.getState().counters).toEqual([0,0,0]);
});

it('step up from 0 to 1', ()=>{
	const state = store.getState().counter; 
	Object.freeze(state);

	store.dispatch({type:STEP_UP,index:0});

	expect(store.getState().counters).toEqual([1,0,0]);
});

it('step down from 1 to 0', ()=>{
	const state = store.getState().counter; 
	Object.freeze(state);

	store.dispatch({type:STEP_DOWN,index:1});
	expect(store.getState().counters).toEqual([1,-1,0]);
});