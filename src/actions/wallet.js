const {
	Constants: {
		actions
	}
} = require("../../ProjectData.json");

export const updateWallet = (payload) => ({
	type: actions.UPDATE_WALLET,
	payload
});
