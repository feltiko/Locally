import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Header extends Component {
	constructor (props) {
		super(props);
    this.state = {};
  }

  openDrawer = () => {
    this.props.navigation.openDrawer();
  }

	render () {
		return (
			<View style={styles.header}>
        <TouchableOpacity onPress={this.openDrawer}>
				  <Text style={styles.menuText}>MENU</Text>
        </TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    zIndex: 9,
    justifyContent: 'center',
  },
  menuText: {
		fontFamily: 'PTSansBold',
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#333',
  }
});

export default Header;
