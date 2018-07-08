import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../../Components/Header';

class Settings extends Component {
	constructor (props) {
		super(props);
		this.state = {};
	}
	render () {
		return (
			<View>
				<Header navigation={this.props.navigation} />
				<View>
					<Text>Settings</Text>
				</View>
			</View>
		);
	}
}

export default Settings;
