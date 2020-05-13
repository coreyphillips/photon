import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "../styles/components";

const _DataEntry = ({ title = "", value = ""}) => {
	return (
		<Card.Content style={styles.container}>
			<Text style={styles.title}>{title}:</Text>
			<Text style={styles.text}>{value}</Text>
		</Card.Content>
	);
};
const styles = StyleSheet.create({
	container: {
		width: "100%",
		marginVertical: 10,
	},
	title: {
		fontWeight: "bold",
		fontSize: 18
	},
	text: {
		fontSize: 18
	}
});

//ComponentShouldNotUpdate
const DataEntry = memo(
	_DataEntry,
	(prevProps, nextProps) => {
		if (!prevProps || !nextProps) {
			return true;
		}
		return prevProps.title === nextProps.title &&
			prevProps.value === nextProps.value;
	},
);

export default DataEntry;
