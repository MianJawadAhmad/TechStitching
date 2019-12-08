import React, { Component } from 'react'
import { ScrollView,  KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import {Container,Header,Content,Left,Body,Right,Icon, Text, View, Button} from 'native-base'
// Styles
import styles from './Styles/ChoseMeasurementScreenStyle'

class ChoseMeasurementScreen extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Left style={{flex:1}}>
            <Icon style={{ fontSize: 50 }} name="arrow-round-back"
              onPress={()=>this.props.navigation.navigate('DetailScreen')}/> 
            </Left>
            <Body style={{flex:3}}>
              <Text style={{fontSize:20,fontWeight:'bold'}}>Choose Measurement</Text>
            </Body>
            <Right style={{flex:1}}/>
        </Header>
        <Content>
          <View style={{flex:1}}>
            <View style={{margin:30, marginTop:100}}>
              <Button large dark style={{justifyContent:'center',height:200 }}
              onPress={()=>this.props.navigation.navigate('ArScreen')}>
                <Text>Mobile Cam</Text>
              </Button>
            </View>
            <View style={{margin:30}}>
              <Button large dark style={{justifyContent:'center',height:200}}>
              <Text>Form</Text>
              </Button>
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChoseMeasurementScreen)
