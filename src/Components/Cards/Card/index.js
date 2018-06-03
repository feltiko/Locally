import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Card extends Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	render () {
		const { data, callback } = this.props;

		return (
			<TouchableOpacity style={styles.card} onPress={() => callback(data)}>
				<View>
					<Image
						source={{ uri: data.preview }}
						style={{
							width: 250,
							height: 150,
							resizeMode: Image.resizeMode.cover,
						}}
					/>
				</View>

				<View style={styles.cardDesc}>
					<Text style={styles.city}>{data.name}</Text>
					<Text style={styles.info}>AL: {data.complexity} / 5</Text>
					<Text style={styles.info}>Raiting: {data.raiting} / 5</Text>
					<Text style={styles.info}>{data.description}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 5,
		backgroundColor: '#fff',
		width: 250,
		height: 350,
		marginRight: 10,
	},
	cardDesc: {
		padding: 15,
	},
	city: {
		color: '#333',
		fontSize: 18,
		fontFamily: 'PTSansBold',
	},
	info: {
		color: '#777',
		fontSize: 14,
	},
});

export default Card;
