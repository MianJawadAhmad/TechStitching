import { createStackNavigator, createAppContainer } from 'react-navigation'
import FormScreen from '../Containers/FormScreen'
import OrdersuccesScreen from '../Containers/OrdersuccesScreen'
import LogInScreen from '../Containers/LogInScreen'
import OrderScreen from '../Containers/OrderScreen'
import ArScreen from '../Containers/ArScreen'
import ChoseMeasurementScreen from '../Containers/ChoseMeasurementScreen'
import DetailScreen from '../Containers/DetailScreen'
import FilterScreen from '../Containers/FilterScreen'
import ClothsScreen from '../Containers/ClothsScreen'
import HomeScreen from '../Containers/HomeScreen'
import SplashScreen from '../Containers/SplashScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  FormScreen: { screen: FormScreen },
  OrdersuccesScreen: { screen: OrdersuccesScreen },
  LogInScreen: { screen: LogInScreen },
  OrderScreen: { screen: OrderScreen },
  ArScreen: { screen: ArScreen },
  ChoseMeasurementScreen: { screen: ChoseMeasurementScreen },
  DetailScreen: { screen: DetailScreen },
  FilterScreen: { screen: FilterScreen },
  ClothsScreen: { screen: ClothsScreen },
  HomeScreen: { screen: HomeScreen },
  SplashScreen: { screen: SplashScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SplashScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
