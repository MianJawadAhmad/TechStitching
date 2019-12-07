import React, { Component } from 'react'
import { View,Image } from 'react-native'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SplashScreenStyle'
import {Images, Metrics} from '../Themes'

class SplashScreen extends Component {
  componentDidMount(){

    setTimeout(()=>{
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
      });
      this.props.navigation.dispatch(resetAction);
    },3000)
  }
  render () {
    return (
      <View style={{flex:1}}>
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={Images.logo} style={{width: Metrics.screenWidth-50}} resizeMode={'contain'}/>
      </View>
      <View style={{ marginBottom : 50, flexDirection : 'row', alignItems : 'center', justifyContent : 'center'}}>
        <Image source={Images.computercell} style={{ width: Metrics.screenWidth/2-20, height : 50}} resizeMode={'contain'}/>
        <Image source={Images.computercell} style={{ width: Metrics.screenWidth/2-20, height : 50}} resizeMode={'contain'}/>
      </View>
    </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
