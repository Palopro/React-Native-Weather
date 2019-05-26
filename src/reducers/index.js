import { combineReducers } from "redux";
import weatherReducer from './weatherReducer';
const appReducer = combineReducers({
  weatherReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
