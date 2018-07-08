import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Card from './Card';

class Cards extends Component {
	constructor (props) {
		super(props);
		this.state = {
			cards: [
				{
					id: 1,
					city: 'Omsk',
					name: 'Beautiful wooden bridge ',
					complexity: 'Hard',
					raiting: 5,
					author: 1,
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet... ',
					coords: {
						lat: 14,
						lng: 88,
					},
					photos: [],
					preview: 'https://cdn.pixabay.com/photo/2017/02/19/22/15/bridge-2081063_1280.jpg',
				},
			],
		};
	}

	test = (data) => {
		console.log(data);
	};

	render () {
		const { cards } = this.state;

		const cardViews = cards.map((val) => <Card callback={(data) => this.test(data)} key={val.id} data={val} />);
		return (
			<View>
				<View>
					<Text style={styles.heading}>Some places in Russia, Omsk</Text>
				</View>
				<ScrollView horizontal style={styles.cardsWrapper}>
					<View style={{ width: 10 }} />
					{cardViews}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	cardsWrapper: {
		flexDirection: 'row',
		position: 'relative',
	},
	heading: {
		fontFamily: 'PTSansBold',
		fontSize: 18,
		paddingLeft: 10,
		color: '#fff',
	},
});

export default Cards;
