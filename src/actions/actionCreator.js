import ACTION from './actionTypes';

export const getWeatherAction = (city) => ({
    type: ACTION.GET_WEATHER_ACTION,
    city,
});