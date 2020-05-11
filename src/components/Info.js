import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Card } from "../styles/components";
import DataEntry from "./DataEntry";
import {
	getStatusInfo
} from "../utils/helpers";

const _Info = (props) => {
	
	const getStatus = (): { color: string, message: string } => {
		try {
			const startedLnd = props.wallet.startedLnd;
			const syncedToChain = props.wallet.syncedToChain;
			const isOnline = props.wallet.isOnline;
			const statusInfo = getStatusInfo({ startedLnd, syncedToChain, isOnline });
			return statusInfo.data;
		} catch {}
	};
	
	const { info, channelBalance, walletBalance, peers } = props.wallet;
	
	return (
		<Card style={styles.container}>
			<DataEntry title="Status" value={getStatus().message} />
			<DataEntry title="Block Height" value={info.blockHeight} />
			<DataEntry title="Active Channels" value={info.numActiveChannels} />
			<DataEntry title="Channel Balance" value={channelBalance.balance} />
			<DataEntry title="Inbound Capacity" value={0} />
			<DataEntry title="Wallet Balance" value={walletBalance.totalBalance} />
			<DataEntry title="Alias" value={info.alias} />
			<DataEntry title="Peers" value={peers.length} />
			<DataEntry title="Testnet" value={info.testnet ? "true" : "false"} />
			<DataEntry title="Version" value={info.version || "..."} />
		</Card>
	);
};
const styles = StyleSheet.create({
	container: {
		paddingTop: 10,
		marginBottom: 20
	}
});

//ComponentShouldNotUpdate
const Info = memo(
	_Info,
	(prevProps, nextProps) => {
		if (!prevProps || !nextProps) {
			return true;
		}
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


export default connect(mapStateToProps, mapDispatchToProps)(Info);
