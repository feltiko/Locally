import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { routes, config } from './src/Routes';

const RootStack = routes;
export default class App extends Component {
	render () {
		return <RootStack />;
	}
}
