import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import {Container,Header,Content,Left,Body,Right,Icon} from 'native-base'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DetailScreenStyle'

class DetailScreen extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Left>
          <Icon style={{ fontSize: 50 }} name="arrow-round-back"
            onPress={()=>this.props.navigation.navigate('ClothsScreen')}/> 
          </Left>
        </Header>
        <Content>

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

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
