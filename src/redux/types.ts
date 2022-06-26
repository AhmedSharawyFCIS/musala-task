import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import reducers from './reducers';

export interface Action {
  type: string;
  payload: any;
}

export type State = ReturnType<typeof reducers>;

export type AppDispatch = ThunkDispatch<State, any, AnyAction>;
