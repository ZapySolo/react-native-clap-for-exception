import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class ScoreScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.scoreText}>Your Score</Text>
                <Text style={styles.scoreNumber}>{this.props.score}</Text>
                <TouchableOpacity style={styles.touchable}>
                  <View style={styles.goBack}>
                    <Text style={styles.playAgainText}>PlayAgain</Text>
                  </View>
                </TouchableOpacity>
            </View>
        );
    }
}

/**
 * Use it as 
 * first import the file
 * then <ScoreScreen score = this.state.score />
 */

 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    scoreText: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        fontSize: 80,
        fontWeight: 'bold',
        paddingTop: 150
    },
    scoreNumber: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 150,
        fontWeight: 'bold',
        paddingTop: 50,
        paddingBottom: 50
    },
    playAgainText: {
        fontSize: 30
    },
    touchable: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        height: 80,
        width: 150,
        borderRadius: 40,
    }
});

