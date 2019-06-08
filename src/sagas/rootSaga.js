import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import * as weatherSaga from './weatherSaga';

export default function* rootSaga() {
  yield takeLatest(ACTION.GET_WEATHER_ACTION,
    weatherSaga.getWeatherSaga);
}
