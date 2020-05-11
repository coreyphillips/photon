import React, { memo } from "react";
import {
	StyleSheet,
	Platform
} from "react-native";
import PropTypes from "prop-types";
import Modal from "react-native-modal";
import { View, ScrollView } from "../styles/components";
import XButton from "./XButton";

interface DefaultModalComponent {
	isVisible: boolean,
	onClose: () => void,
	style?: object,
	contentStyle?: object,
	type?: string,
	children: object
}
const _DefaultModal = ({ isVisible = false, onClose = () => null, style = {}, contentStyle = {}, type = "ScrollView", children = {} }: DefaultModalComponent) => {
	
	return (
		<Modal
			isVisible={isVisible}
			onBackdropPress={onClose}
			backdropOpacity={0.1}
			propagateSwipe={true}
			onBackButtonPress={onClose}
		>
			<View type="background" borderColor="text" style={[styles.modalContainer, style]}>
				{type === "ScrollView" &&
				<ScrollView
					type="background"
					style={[styles.modalScrollView,
						{ ...contentStyle }]}
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					keyboardShouldPersistTaps={"handled"}
					contentContainerStyle={{ flexGrow:1 }}
				>
					{children}
				</ScrollView>}
				{type !== "ScrollView" &&
				<View type="background" style={[styles.modalScrollView, { ...contentStyle }]}>
					{children}
				</View>
				}
				<XButton onPress={onClose} style={{ alignSelf: "center", bottom: "1.8%" }} />
			</View>
		</Modal>
	);
};

_DefaultModal.protoTypes = {
	isVisible: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	children: PropTypes.object.isRequired,
	style: PropTypes.object,
	contentStyle: PropTypes.object,
	type: PropTypes.string
};

const styles = StyleSheet.create({
	modalContainer: {
		position: "absolute",
		alignSelf: "center",
		width: "100%",
		height: Platform.OS === "ios" ? "80%" : "84%",
		borderRadius: 20,
		borderWidth: 1.2,
		padding: 5
	},
	modalScrollView: {
		flex: 1,
		borderRadius: 16,
		paddingHorizontal: 10,
		paddingVertical: 5
	},
});

//ComponentShouldNotUpdate
const DefaultModal = memo(
	_DefaultModal,
	(prevProps, nextProps) => {
		if (!prevProps || !nextProps) return true;
		return (
			nextProps.isVisible === prevProps.isVisible &&
			nextProps.children === prevProps.children
		);
	}
);

export default DefaultModal;
