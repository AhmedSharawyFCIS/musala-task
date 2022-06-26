import actionTypes from '../actionTypes';
import { Action } from '../types';

const initialState = {
  loadingGetNews: false,
  errorGetNews: false,
  news: [],
};
export default (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.LOADING_GET_NEWS:
      return { ...state, ...initialState, loadingGetNews: true };
    case actionTypes.SUCCESS_GET_NEWS:
      return { ...state, ...initialState, news: action.payload };
    case actionTypes.ERROR_GET_NEWS:
      return { ...state, ...initialState, errorGetNews: true };
    default:
      return state;
  }
};
