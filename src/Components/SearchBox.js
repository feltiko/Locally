import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

class SearchBox extends Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	render () {
		return (
			<View style={styles.searchBoxInputWrapper}>
				<TextInput style={styles.searchBoxInput} underlineColorAndroid="transparent" placeholder="Type a location..."/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  searchBoxInputWrapper: {
    paddingTop: 50,
    paddingBottom: 30,
    paddingLeft: 35,
    paddingRight: 35,
  },
  searchBoxInput: {
    backgroundColor: '#fff',
    color: '#333',
    borderColor: '#ddd',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 60,
    paddingLeft: 10,
    borderRadius: 5,
		fontFamily: 'PTSansRegular',
    fontSize: 16,
  }
});

export default SearchBox;
