import React, { Component } from 'react'
import { ScrollView,  KeyboardAvoidingView, Image } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Content, Form, Item, Input, Label, Button,Text } from 'native-base';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import {Images, Metrics} from '../Themes'
// Styles
import styles from './Styles/OrderScreenStyle'

class OrderScreen extends Component {
  render () {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item stackedLabel >
              <Image source={Images.logo} style={{width: 300, height:300,marginBottom:100}} resizeMode={'contain'}/>
            </Item>
            <Item stackedLabel >
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button style={{justifyContent:'center', marginLeft:50, marginRight:50, marginTop:50}}
          onPress={()=>this.props.navigation.navigate('LogInScreen')}>
            <Text>
              Log In
            </Text>
          </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderScreen)
