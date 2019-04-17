//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class WelcomeScreen extends Component {
    myInterval = setTimeout(()=>{
        this.props.navigation.navigate('Home')
      },6000);
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.gameName}>Clap For Exception</Text>
                <Text style={styles.gameDetails}>In this Game You Need to set a </Text>
                <Text style={styles.gameDetails}>number and clap for</Text>
                <Text style={styles.gameDetails}>(1) It's Multiple and</Text>
                <Text style={styles.gameDetails}>(2) Multiple of 10 + the setNumber</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    gameName: {

    },
    gameDetails: {

    }
});

//make this component available to the app
export default WelcomeScreen;
