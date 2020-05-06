import { combineReducers } from "redux";
import walletReducer from "./wallet";
import settingsReducer from "./settings";

const appReducers = combineReducers({
	wallet: walletReducer,
	settings: settingsReducer
});

export default appReducers;
