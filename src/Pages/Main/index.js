import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import SearchBox from '../../Components/SearchBox';
import Cards from '../../Components/Cards';

class Main extends Component {
	constructor (props) {
		super(props);
		this.state = {
			region: {
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			},
		};
	}

	render () {
		return (
			<View style={{ flex: 1, backgroundColor: '#fff' }}>
				<View
					style={{
						...StyleSheet.absoluteFillObject,
					}}
				>
					<MapView
						style={styles.map}
						mapType="hybrid"
					/>
				</View>
				<View style={{flex: 1 }}>
					<SearchBox />
				</View>
				<View style={{flex: 3, justifyContent: 'flex-end', paddingBottom: 10, }}>
					<Cards />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	map: {
		...StyleSheet.absoluteFillObject,
	},
});

export default Main;
