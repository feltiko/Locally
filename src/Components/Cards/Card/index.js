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
				<View style={{ position: 'relative' }}>
					<View style={styles.stats}>
						<LinearGradient
							colors={[ 'rgba(0,0,0,0.8)', 'rgba(0,0,0,0)' ]}
							style={{
								width: 250,
								height: 75,
								position: 'absolute',
								zIndex: 8,
							}}
						/>
						<Text style={styles.stat}>{data.complexity}</Text>
						<Text style={styles.stat}>{data.raiting}</Text>
					</View>
					<Image
						source={{ uri: data.preview }}
						style={{
							width: 250,
							height: 150,
							resizeMode: Image.resizeMode.cover,
							borderTopLeftRadius: 10,
							borderTopRightRadius: 10,
						}}
					/>
				</View>

				<View style={styles.cardDesc}>
					<Text style={styles.city}>{data.name}</Text>
					<Text style={styles.info}>{data.description}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 10,
		backgroundColor: '#fff',
		width: 250,
		height: 350,
		marginRight: 10,
	},
	stat: {
		color: '#fff',
		fontFamily: 'PTSansBold',
		fontSize: 24,
		zIndex: 9,
		position: 'relative',
	},
	stats: {
		width: '100%',
		position: 'absolute',
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 50,
		zIndex: 9,
		padding: 5,
		paddingLeft: 10,
		paddingRight: 10,
	},
	cardDesc: {
		padding: 15,
	},
	city: {
		color: '#333',
		fontSize: 22,
		fontFamily: 'PTSansBold',
	},
	info: {
		color: '#777',
		fontSize: 18,
	},
});

export default Card;
