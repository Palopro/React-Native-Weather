import { put } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import { getWeather } from '../api/restController';

export function* getWeatherSaga({ city }) {
  yield put({ type: ACTION.GET_WEATHER_REQUEST });
  try {
    const { data } = yield getWeather(city);
    console.log(data);
    yield put({ type: ACTION.GET_WEATHER_SUCCESS, weather: data });
  } catch (e) {
    yield put({
      type: ACTION.GET_WEATHER_ERROR,
      error: e.response.data.message,
    });
  }
}
