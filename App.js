import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { routes, config } from './src/Routes';

const RootStack = createStackNavigator(routes, config);

export default class App extends Component {
	render () {
		return <RootStack />;
	}
}
// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: '#fff',
// 	},
// });
