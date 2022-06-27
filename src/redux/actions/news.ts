import { Dispatch } from 'redux';
import { axiosInstance } from '../../config';
import { NewsParams } from '../../types';
import actionTypes from '../actionTypes';

const getNews =
  (isRefresh: boolean, params: NewsParams) => async (dispatch: Dispatch) => {
    if (!isRefresh) {
      dispatch({ type: actionTypes.LOADING_GET_NEWS });
    }

    try {
      const { data } = await axiosInstance.get('v2/everything', { params });
      dispatch({ type: actionTypes.SUCCESS_GET_NEWS, payload: data?.articles });
    } catch (error: any) {
      dispatch({ type: actionTypes.ERROR_GET_NEWS });
    }
  };

export { getNews };
