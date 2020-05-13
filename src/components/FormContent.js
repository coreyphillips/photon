import React, { memo, useState } from "react";
import { StyleSheet } from "react-native";
import {Button, TextInput, View, Text} from "../styles/components";
import DefaultModal from "./DefaultModal";
import Camera from "./Camera";

const defaultModalState = { id: "", display: false, type: "ScrollView" };

const _FormContent = (props) => {
	const [modalInfo, setModalInfo] = useState(defaultModalState);
	const openModal = (id = "", type = "ScrollView") => setModalInfo({ id, display: !!id, type });
	const closeModal = () => {setModalInfo(defaultModalState);};
	
	return (
		<>
			<TextInput label="Lightning URI" />
			<View style={styles.buttonRow}>
				<Button icon="camera" onPress={() => openModal("lightningUri", "View")}>
					Scan
				</Button>
				<Button icon="send" onPress={() => null}>
					Send
				</Button>
			</View>
			
			<Button onPress={() => openModal("test", "View")}>
				Open Test Modal
			</Button>
			
			<DefaultModal
				isVisible={modalInfo.display}
				type={modalInfo.type}
				onClose={closeModal}
			>
				{modalInfo.id === "lightningUri" &&
				<View style={{ flex: 1 }}>
					<Camera onClose={closeModal} onBarCodeRead={() => null} />
				</View>}
				{modalInfo.id === "test" &&
				<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
					<Text>Hello!</Text>
				</View>}
			</DefaultModal>
		</>
	);
};

const styles = StyleSheet.create({
	buttonRow: {
		flexWrap: "wrap",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		width: "90%",
		alignSelf: "center"
	}
});

//ComponentShouldNotUpdate
const FormContent = memo(
	_FormContent,
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


export default connect(mapStateToProps, mapDispatchToProps)(FormContent);
