/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, memo } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { FontAwesome } from "../styles/components";
import { ThemeProvider } from "styled-components/native";

const App = (props) => {
  console.log(props);
  return (
      <ThemeProvider theme={props.settings.theme}>
        <StatusBar barStyle="dark-content" />
        <FontAwesome onPress={() => null} name="star" size={30} color="primary" />
      </ThemeProvider>
  );
};

const styles = StyleSheet.create({

});

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


export default connect(mapStateToProps, mapDispatchToProps)(App);
