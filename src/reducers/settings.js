// @flow weak
const {
	Constants: {
		actions
	}
} = require("../../ProjectData.json");
import { light } from '../styles/themes';

const settingsReducer = (state = {
	loading: false,
	error: false,
	errorMsg: "",
	theme: light
}, action) => {
	switch (action.type) {
		
		case actions.UPDATE_SETTINGS:
			return {
				...state,
				...action.payload
			};
		
		case actions.UPDATE_THEME:
			return {
				...state,
				theme: action.payload
			};
		
		default:
			return state;
	}
};


export default settingsReducer;
