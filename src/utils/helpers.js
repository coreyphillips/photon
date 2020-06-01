import NetInfo from "@react-native-community/netinfo";
const {
	Constants: {
		colors
	}
} = require("../../ProjectData.json");

export const isOnline = async () => {
	try {
		const connectionInfo = await NetInfo.fetch();
		return connectionInfo.isConnected;
	} catch {return false;}
};

export const getStatusInfo = ({ startedLnd = false, syncedToChain = false, isOnline = true }):
	{ error: boolean,  data: { color: string, message: string }} => {
	const failure = { error: true, data: { color: colors.red, message: "" } };
	try {
		if (!isOnline) return {
			error: false,
			data: {
				color: colors.red,
				message: "Offline"
			}
		};
		if (!startedLnd) return { error: false, data: { color: colors.darkGray, message: "LND not started" } };
		const data = {
			color: syncedToChain ? colors.green : colors.yellow,
			message: syncedToChain ? "Fully Synced": "Syncing"
		};
		return { error: false, data };
	} catch (e) {return {...failure, data: { ...failure.data, message: e }};}
};
