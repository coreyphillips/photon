// @flow weak
const {
	Constants: {
		actions
	}
} = require("../../ProjectData.json");

const settingsReducer = (state = {
	loading: false,
	error: false,
	errorMsg: "",
	wallets: []
}, action) => {
	switch (action.type) {
		
		case actions.UPDATE_WALLET:
			return {
				...state,
				...action.payload
			};
		
		default:
			return state;
	}
};


export default settingsReducer;
