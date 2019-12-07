import React, { Component } from 'react'
import { ScrollView,  KeyboardAvoidingView,ImageBackground,View } from 'react-native'
import { connect } from 'react-redux'
import {Header,Left,Body,Right,Container,Content,Footer, Text,Button} from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import data from '../Themes/data'
// Styles
import styles from './Styles/HomeScreenStyle'
import colors from '../Themes/Colors'
import images from '../Themes/Images'
class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      buttonColorm:'black',
      textColorm:'white',
      buttonColorw:'white',
      textColorw:'black'
    }
  }
  render () {
    console.log(data.men)
    return (
      <Container>
        <Header>
          <Left style={{flex:1}}>
            <Button full style={{flex:1,borderWidth:2,backgroundColor:this.state.buttonColorm, borderColor:'black',justifyContent:'center'}}
            onPress={this.menButton}>
              <Text style={{color:this.state.textColorm}}>MEN</Text>
            </Button>
          </Left>
          <Right style={{flex:1}}>
            <Button full style={{flex:1,backgroundColor:this.state.buttonColorw, borderWidth:2, borderColor:'black',justifyContent:'center'}}
            onPress={this.womenButton}>
              <Text style={{color:this.state.textColorw}}>WOMEN</Text>
            </Button>
          </Right>
        </Header>
        <Content style={{flex:1}}>
          <ImageBackground style={{width:200,height:200}} source={data.men.image}>

          </ImageBackground>
        </Content>
      </Container>
    )
  }
  womenButton = () =>{
    if(this.state.buttonColorw === 'white'){
      this.setState({buttonColorm:'white', textColorm:'black',buttonColorw:'black', textColorw:'white',})
     }//else{
    //   this.setState({buttonColorm:'black', textColorm:'white',buttonColorw:'white', textColorw:'black'})
    // }
  }

  menButton = () =>{
    if(this.state.buttonColorm === 'white'){
      this.setState({buttonColorm:'black', textColorm:'white',buttonColorw:'white', textColorw:'black'})
     }
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



export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
