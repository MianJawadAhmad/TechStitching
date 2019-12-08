import React, { Component } from 'react'
import { ScrollView,  KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Container, Header, Content,  Text, Icon, View } from 'native-base';
// Styles
import styles from './Styles/OrdersuccesScreenStyle'

class OrdersuccesScreen extends Component {
  render () {
    return (
      <Container>
      <Header />
      <Content >
        <View style={{justifyContent:'center', flex:1}}>
        <Icon name='checkmark-circle' style={{fontSize:100, alignSelf:'center', marginTop:200}}/>
        <Text style={{fontSize:50, alignSelf:'center'}}>Order SuccesFull</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrdersuccesScreen)
