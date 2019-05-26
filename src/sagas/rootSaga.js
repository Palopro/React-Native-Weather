import ACTION from '../actions/actionTypes';
import {takeLatest} from 'redux-saga/effects';
import * as weatherSaga from './weatherSaga';

export default function* rootSaga() {
    yield takeLatest (ACTION.GET_WEATHER_ACTION, 
        weatherSaga.getWeatherSaga);

}