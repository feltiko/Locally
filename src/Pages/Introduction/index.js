import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppIntro from 'react-native-app-intro';

class Introduction extends Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	onSkipBtnHandle = (index) => {
		this.props.navigation.navigate('Sign');
		console.log(index);
	};

	doneBtnHandle = () => {
		this.props.navigation.navigate('Sign');
	};

	nextBtnHandle = (index) => {
		console.log(index);
	};

	onSlideChangeHandle = (index, total) => {
		console.log(index, total);
	};

	componentDidMount () {
		console.log(this.props);
	}

	render () {
		const { slides } = this.state;

		return (
			<View>
				<AppIntro
					onNextBtnClick={this.nextBtnHandle}
					onDoneBtnClick={this.doneBtnHandle}
					onSkipBtnClick={this.onSkipBtnHandle}
					onSlideChange={this.onSlideChangeHandle}
				>
					<View style={[ styles.slide ]}>
						<View style={{ marginTop: 40 }}>
							<Image style={styles.image} source={require('../../Assets/search.png')} />
						</View>
						<View style={{marginTop: 20,}} level={10}>
							<Text style={styles.heading}>Find</Text>
						</View>
						<View level={15}>
							<Text style={styles.text}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed leo sollicitudin,
								viverra nunc quis, congue ligula.{' '}
							</Text>
						</View>
					</View>
					<View style={[ styles.slide ]}>
						<View style={{ marginTop: 40 }}>
							<Image style={styles.image} source={require('../../Assets/map.png')} />
						</View>
						<View style={{marginTop: 20,}} level={10}>
							<Text style={styles.heading}>Share</Text>
						</View>
						<View level={15}>
							<Text style={styles.text}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed leo sollicitudin,
								viverra nunc quis, congue ligula.{' '}
							</Text>
						</View>
					</View>
					<View style={[ styles.slide ]}>
						<View style={{ marginTop: 40 }}>
							<Image style={styles.image} source={require('../../Assets/flag.png')} />
						</View>
						<View style={{marginTop: 20,}} level={10}>
							<Text style={styles.heading}>Visit & Rate</Text>
						</View>
						<View level={15}>
							<Text style={styles.text}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed leo sollicitudin,
								viverra nunc quis, congue ligula.{' '}
							</Text>
						</View>
					</View>
				</AppIntro>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	slide: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#89BBFE',
		padding: 15,
	},
	heading: {
		color: '#fff',
		fontSize: 28,
		fontWeight: 'bold',
    fontFamily: 'PTSansBold',
	},
	text: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'normal',
		textAlign: 'center',
    fontFamily: 'PTSans',
		maxWidth: 350,
	},
	image: {
		width: 128,
		height: 128,
	},
});

export default Introduction;
