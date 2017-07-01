import { createStore, Action } from 'redux';

type State = {
  state1: string;
}

const reducer = (state: State, action: Action) => {
  return state;
}

export const store = createStore(
  reducer,
  {
    state1: 'state1',
  },
);
