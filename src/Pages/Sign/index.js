import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import AppIntro from 'react-native-app-intro';

class Introduction extends Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	render () {
		return (
			<View style={styles.container}>
				<View style={styles.logo}>
					<Text style={styles.logoTitle}>Locally</Text>
					<Text style={styles.logoSubtitle}>Get your inspiration </Text>
					<Text style={styles.logoSubtitle}>by unique locations</Text>
				</View>
				<View>
					<Text style={styles.signInText}>Sign in</Text>
					<View style={{ marginBottom: 10 }}>
						<Button
							onPress={() => this.props.navigation.navigate('Main')}
							title='through facebook'
							style={styles.button}
						/>
					</View>
					<View style={{ marginBottom: 10 }}>
						<Button
							onPress={() => this.props.navigation.navigate('Main')}
							title='through twitter'
							style={styles.button}
						/>
					</View>
					<View style={{ marginBottom: 10 }}>
						<Button
							onPress={() => this.props.navigation.navigate('Main')}
							title='through instagram'
							style={styles.button}
						/>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#fff',
		padding: 15,
	},
	signInText: {
		marginTop: 80,
		marginBottom: 10,
		fontFamily: 'PTSansBold',
		textAlign: 'center',
		fontSize: 24,
	},
	button: {
		fontFamily: 'PTSansBold',
		marginBottom: 10,
	},
	logo: {
		paddingTop: 75,
	},
	logoTitle: {
		fontWeight: 'bold',
		fontSize: 48,
		fontFamily: 'PTSansBold',
		color: '#333',
		textAlign: 'center',
	},
	logoSubtitle: {
		fontFamily: 'PTSans',
		fontSize: 16,
		color: '#777',
		textAlign: 'center',
	},
});

export default Introduction;
