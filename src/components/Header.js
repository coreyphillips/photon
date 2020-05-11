import React, {memo} from "react";
import { StyleSheet } from "react-native";
import { Feather, View } from "../styles/components";
import {Avatar} from "react-native-paper";
const {
	getStatusInfo
} = require("../utils/helpers");

const themes = require("../styles/themes");

const _Header = (props) => {
	
	const getStatus = (): { color: string, message: string } => {
		try {
			const startedLnd = props.wallet.startedLnd;
			const syncedToChain = props.wallet.syncedToChain;
			const isOnline = props.wallet.isOnline;
			const statusInfo = getStatusInfo({ startedLnd, syncedToChain, isOnline });
			return statusInfo.data;
		} catch {}
	};
	
	const updateTheme = () => {
		try {
			const theme = props.settings.theme.themeId === "dark" ? themes["light"] : themes["dark"];
			props.updateSettings({ theme });
		} catch {}
	};
	
	return (
		<View style={styles.container}>
			<Avatar.Icon size={12} style={{backgroundColor: getStatus().color}} />
			<Feather
				onPress={updateTheme}
				name={props.settings.theme.themeId === "light" ? "moon" : "sun"}
				size={30}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 15,
		marginHorizontal: 10,
		marginBottom: 20
	}
});

//ComponentShouldNotUpdate
const Header = memo(
	_Header,
	(prevProps, nextProps) => {
		if (!prevProps || !nextProps) return true;
		return prevProps === nextProps;
	},
);

const connect = require("react-redux").connect;
const bindActionCreators = require("redux").bindActionCreators;
const settingsActions = require("../actions/settings");
const walletActions = require("../actions/wallet");
const mapStateToProps = ({...state}) => ({
	...state
});
const mapDispatchToProps = (dispatch: {}) => {
	const actions = {
		...settingsActions,
		...walletActions
	};
	return bindActionCreators({
		...actions
	}, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);
