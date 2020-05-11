import {DarkTheme, DefaultTheme} from "react-native-paper";

export const light = {
	themeId: "light",
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: "#000000"
	}
	//theme: {...props.theme, colors: { placeholder: 'white', text: 'white', primary: 'white',underlineColor:'transparent',background : '#003489'}},
};

export const dark = {
	themeId: "dark",
	...DarkTheme,
	colors: {
		...DarkTheme.colors,
		primary: "#ffffff"
	}
};
