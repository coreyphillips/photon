import * as React from "react";
import {
	SafeAreaView,
	View,
	StyleSheet
} from "react-native";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { PersistGate } from "redux-persist/integration/react";
import AsyncStorage from "@react-native-community/async-storage";
import appReducers from "./src/reducers";
import App from "./src/components/App";

const Provider = require("react-redux").Provider;
const { persistStore, persistReducer } = require("redux-persist");
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, appReducers);

const store = createStoreWithMiddleware(persistedReducer);
const persistor = persistStore(store);

const Root = () => {
	return (
		<Provider store={store}>
			<PersistGate
				loading={<View />}
				onBeforeLift={null}
				persistor={persistor}
			>
				<SafeAreaView style={styles.container}>
					<App />
				</SafeAreaView>
			</PersistGate>
		</Provider>
	);
};

export default Root;

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
