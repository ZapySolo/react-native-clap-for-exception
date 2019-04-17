import { createStackNavigator, createAppContainer } from "react-navigation";
import GameScreen from './components/GameScreen'
import ScoreScreen from './components/ScoreScreen';
import HomeScreen from './components/HomeScreen';
import WelcomeScreen from './components/WelcomeScreen'

const AppNavigator = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen
    }, 
    Home: {
        screen: HomeScreen
    },
  
    Game: {
        screen: GameScreen
    },
    Score: {
        screen: ScoreScreen
    }
});

export default createAppContainer(AppNavigator);



/*
*******************Dependies you need to install before you run the app**************************
yarn add react-navigation // already saved in dependencies so you only need to install it, simply run 'npm install'
yarn add react-native-gesture-handler
react-native link react-native-gesture-handler // linking all the gestures
*/