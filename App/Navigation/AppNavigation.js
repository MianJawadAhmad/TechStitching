import { createStackNavigator, createAppContainer } from 'react-navigation'
import DetailScreen from '../Containers/DetailScreen'
import FilterScreen from '../Containers/FilterScreen'
import ClothsScreen from '../Containers/ClothsScreen'
import HomeScreen from '../Containers/HomeScreen'
import SplashScreen from '../Containers/SplashScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  DetailScreen: { screen: DetailScreen },
  FilterScreen: { screen: FilterScreen },
  ClothsScreen: { screen: ClothsScreen },
  HomeScreen: { screen: HomeScreen },
  SplashScreen: { screen: SplashScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'DetailScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
