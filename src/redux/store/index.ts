import Reducers from '../reducers';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export default createStore(Reducers, applyMiddleware(ReduxThunk));
