import React, {Component} from 'react';
import { StyleSheet, Text, View, Button,Alert, TouchableOpacity, Image} from 'react-native';

//conditionStatement is just to check if the alert message is already displayed or not

export default class GameScreen extends Component {
  constructor() {
    super();
    this.state = { CounterNumber: 0 ,status: 2, setNumber: 6, score: 0, missed: true, conditionStatement: false };
  }
  _clap = () => {
      this.setState({missed: false})
      if(this.state.CounterNumber % this.state.setNumber != 0 ){
        if(this.state.CounterNumber % 10 != 6){
          Alert.alert('lol you clapped for it');
        }
        this.setState({conditionStatement: true})
      }
      if(this.conditionStatement === true && this.state.CounterNumber % 10 != 6){
        Alert.alert('lol you clapped for it'+this.state.CounterNumber.toString());
      }
      this.setState({conditionStatement: false})
  }
  myInterval = setInterval(() => {
    this.setState({missed: true})
    if(this.state.status === 1){
      this.setState({ CounterNumber: this.state.CounterNumber+1 })
    }if(this.state.status === 2){
      this.setState({ score: this.state.CounterNumber, CounterNumber: 0, })
    }
    if(true){
      setTimeout(()=>{
        if(this.state.missed === true && (this.state.CounterNumber % this.state.setNumber === 0 || this.state.CounterNumber % 10 === 6)){
          Alert.alert('lol you missed it')
        }
      },900);
    }
  }, 1000);

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.counterNumber}>
          <Text style={styles.counterDisplayText}>{this.state.CounterNumber}</Text>
        </View>
        <View style={styles.displayingText}>
          <TouchableOpacity onPress={this._clap}>
            <Image source={require('../asset/image/clap.png')} style={styles.clapImage} />
          </TouchableOpacity>
          <Text >
            Clap for Exception Puzzle
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  counterNumber: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  displayingText: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  counterDisplayText: {
    fontSize: 150,
    fontWeight: 'bold',
  },
  clapImage: {    
    paddingTop: 100,           
    height: 80, 
    width: 80, 
    borderRadius: 60,
    borderWidth: 0.5,
    borderColor: '#d6d7da',         
  }
});

/*

*******************Dependies you need to install before you run the app**************************

yarn add react-navigation // already saved in dependencies so you only need to run 'npm install'
yarn add react-native-gesture-handler
react-native link react-native-gesture-handler // linking all the gestures

*/