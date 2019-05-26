import ACTION from '../actions/actionTypes';

const initialState = {
  weather: null,
  loading: false,
  error: null,
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.GET_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTION.GET_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.weather,
        loading: false,
        error: null,
      };
    case ACTION.GET_WEATHER_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}