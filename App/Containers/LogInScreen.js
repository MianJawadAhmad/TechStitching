import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Content, Form, Item, Input, Label, View, Button } from 'native-base';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LogInScreenStyle'

class LogInScreen extends Component {
  render () {
    return (
      <Container>
        <Header />
        <Content>
          <View>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:25, marginLeft:20}}>
              Fabric
            </Text>
            <Text style={{fontSize:25, marginLeft:200}}>
              2000
            </Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:25, marginLeft:20}}>
              Measurement Charges
            </Text>
            <Text style={{fontSize:25, marginLeft:20}}>
              600
            </Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:25, marginLeft:20, marginTop:50}}>
              Total
            </Text>
            <Text style={{fontSize:25, marginLeft:215, marginTop:50}}>
              2600
            </Text>
            </View>
            <Button style={{marginTop:200, marginLeft:50,marginRight:50, justifyContent:'center'}}
            onPress={()=>this.props.navigation.navigate('OrdersuccesScreen')}>
              <Text>
                Order
              </Text>
            </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(LogInScreen)
