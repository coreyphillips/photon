const {
	Constants: {
		actions,
		colors
	}
} = require("../../ProjectData.json");

export const updateSettings = (payload) => ({
	type: actions.UPDATE_SETTINGS,
	payload
});

export const updateTheme = (theme = colors.white) => ({
	type: actions.UPDATE_THEME,
	payload: theme
});

