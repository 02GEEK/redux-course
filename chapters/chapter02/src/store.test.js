import store, {STEP_UP,STEP_DOWN} from './store';

it('checking init values',()=>
	expect(store.getState()).toBe(0)
);

it('step up from 0 to 1', ()=>{
	store.dispatch({type:STEP_UP});
	expect(store.getState()).toBe(1);
});

it('step down from 1 to 0', ()=>{
	store.dispatch({type:STEP_DOWN});
	expect(store.getState()).toBe(0);
});