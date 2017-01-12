import store, {STEP_UP,STEP_DOWN,ADD_COUNTER} from './store';

it('starting up with 3 counters',()=>{
	expect(store.getState()).toEqual([0,0,0]);
});

it('step up from 0 to 1', ()=>{
	const state = store.getState(); 
	Object.freeze(state);

	store.dispatch({type:STEP_UP,index:0});

	expect(store.getState()).toEqual([1,0,0]);
});

it('step down from 1 to 0', ()=>{
	const state = store.getState(); 
	Object.freeze(state);

	store.dispatch({type:STEP_DOWN,index:1});
	expect(store.getState()).toEqual([1,-1,0]);
});