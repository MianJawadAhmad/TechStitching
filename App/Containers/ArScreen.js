import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import {Images,Metrics} from '../Themes'
// Styles
import styles from './Styles/ArScreenStyle'
import { View, Button } from 'native-base'

class ArScreen extends Component {
  render () {
    return (
      <View>
        <ImageBackground source={Images.AR} style={{width:'100%',height:'100%'}} resizeMode={'cover'}>
          <Button transparent style={{width:50, marginTop:750, marginLeft:180}}
          onPress={()=>this.props.navigation.navigate('OrderScreen')}></Button>
        </ImageBackground>
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

export default connect(mapStateToProps, mapDispatchToProps)(ArScreen)
