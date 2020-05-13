/**
 * @format
 * @flow strict-local
 */
import React, {memo, useLayoutEffect} from 'react';
import {
	Keyboard,
	StyleSheet
} from 'react-native';
import {View, ScrollView} from "../styles/components";
import {ThemeProvider} from "styled-components/native";
import Header from "./Header";
import Info from "./Info";
import FormContent from "./FormContent";

const {
	isOnline
} = require("../utils/helpers");

const _App = (props) => {
	
	const launchDefaultFuncs = () => {
		setOnlineStatus();
	};
	
	useLayoutEffect(() => {
		launchDefaultFuncs();
		return () => false;
	}, []);
	
	const setOnlineStatus = async () => {
		try {
			const onlineStatus = await isOnline();
			props.updateWallet({ isOnline: onlineStatus });
		} catch {}
	};
	
	return (
		<ThemeProvider style={styles.container} theme={props.settings.theme}>
			<ScrollView>
				<View style={styles.content} onPress={() => Keyboard.dismiss()}>
					
					<Header />
					<Info />
					<FormContent />
				
				</View>
			</ScrollView>
		</ThemeProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	content: {
		width: "90%",
		alignSelf: "center"
	}
});

//ComponentShouldNotUpdate
const App = memo(
	_App,
	(prevProps, nextProps) => {
		if (!prevProps || !nextProps) {
			return true;
		}
		return prevProps.settings === nextProps.settings &&
			prevProps.wallet === nextProps.wallet;
	},
);

const connect = require("react-redux").connect;
const bindActionCreators = require("redux").bindActionCreators;
const walletActions = require("../actions/wallet");
const settingsActions = require("../actions/settings");
const mapStateToProps = ({...state}) => ({
	...state
});
const mapDispatchToProps = (dispatch: {}) => {
	const actions = {
		...walletActions,
		...settingsActions
	};
	return bindActionCreators({
		...actions
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
