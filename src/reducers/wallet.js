// @flow weak
const {
	Constants: {
		actions
	}
} = require("../../ProjectData.json");

const walletReducer = (state = {
	loading: false,
	error: false,
	errorMsg: "",
	startedLnd: false,
	isOnline: true,
	info: {
		version: "",
		commitHash: "",
		identityPubkey: "",
		alias: "...",
		color: "",
		numPendingChannels: 0,
		numActiveChannels: 0,
		numInactiveChannels: 0,
		numPeers: 0,
		blockHeight: 0,
		blockHash: "",
		bestHeaderTimestamp: 0,
		syncedToChain: false,
		syncedToGraph: false,
		testnet: true,
		chains: [{
			chain: "bitcoin",
			network: "testnet"
		}],
		uris: [],
		features: []
	},
	walletBalance: {
		totalBalance: 0,
		confirmedBalance: 0,
		unconfirmedBalance: 0
	},
	channelBalance: {
		balance: 0,
		pendingOpenBalance: 0
	},
	transactions: [],
	payments: [],
	channels: [],
	pendingChannels: [],
	channelAliases: {},
	peers: []
}, action) => {
	switch (action.type) {
		
		case actions.UPDATE_WALLET:
			return {
				...state,
				...action.payload
			};
		
		default:
			return state;
	}
};


export default walletReducer;
