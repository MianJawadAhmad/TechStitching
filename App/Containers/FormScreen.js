import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { View, Button, Content, Container, Header,Right,Left,Body,Icon } from 'native-base'
// Styles
import styles from './Styles/FormScreenStyle'
import {Images,Metrics} from '../Themes'
class FormScreen extends Component {
  render () {
    return (
      <Container>
      <Header>
        <Left style={{flex:1}}>         
            <Icon style={{ fontSize: 50 }} name="arrow-round-back"
            onPress={()=>this.props.navigation.navigate('ChoseMeasurementScreen')}/> 
        </Left>
        <Body style={{flex:2}}>
          <Text style={{fontSize:20}}>
            Men UnStitched Cloths
          </Text>
        </Body>
        <Right style={{flex:1}}>
          <Button transparent>
            <Text>
              Filter
            </Text>
          </Button>
        </Right>
      </Header>
      <Content>
      <View>
        <ImageBackground source={Images.form} style={{width:'100%',height:'100%'}} resizeMode={'cover'}>
          <Button transparent style={{width:50, marginTop:750, marginLeft:180}}
          onPress={()=>this.props.navigation.navigate('OrderScreen')}></Button>
        </ImageBackground>
      </View>
      </Content>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(FormScreen)
