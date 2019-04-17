
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Button } from 'react-native';

// create a component
export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.setNumberText}>Set Your Number</Text>
                <TextInput keyboardType='numeric' style={styles.setNumber}placeholder='6' />
                <Button title='Start' style={styles.button} onPress={() => this.props.navigation.navigate('Game')}/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 200,
        backgroundColor: 'white',
    },
    setNumberText: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    setNumber: {
        fontSize: 40,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width: 40,
    },
    button: {
      paddingTop: 100,           
      height: 80, 
      width: 80, 
      borderRadius: 60, 
    }
});
