import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView,Image } from 'react-native'
import {Container,Header,Content,Left,Body,Right,Icon, Text, View, Button} from 'native-base'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import {Images,Metrics} from '../Themes'
// Styles
import styles from './Styles/DetailScreenStyle'

class DetailScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }
  render () {
    return (
      <Container>
        <Header>
          <Left>
          <Icon style={{ fontSize: 50 }} name="arrow-round-back"
            onPress={()=>this.props.navigation.navigate('ClothsScreen')}/> 
          </Left>
          <Body>
            <Text>Detail </Text>
          </Body>
          <Right/>
        </Header>
        <Content style={{margin:20}}>
          <Image source={Images.detail} style={{width:'100%',height:300}} resizeMode={'cover'}/>
          <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:30, fontWeight:'bold'}}>Grace</Text>
          <Text style={{fontSize:20, fontWeight:'bold',marginLeft:180}}>RS 2000.0</Text>
          </View>
          <Text>______________________________________________________</Text>
          <Text style={{fontSize:20, marginTop:20}}>Avalibility: In Stock</Text>
          <Text style={{fontSize:20, marginTop:20}}>Detail</Text>
          <Text style={{fontSize:20, marginTop:20}}>Grace is synonymous with the exclusive suiting fabric produced with high-quality yarn & has renowned it the reputation for excellent quality across the world.</Text>
          <View style={{flexDirection:'row', justifyContent:'center', marginTop:50}}>
            <Button full  style={{ borderWidth:2, borderColor:'black', backgroundColor:'black'}}
            onPress={()=> this.setState({count: this.state.count-1})}>
              <Text style={{color:'white'}}>-</Text>
            </Button>
            <Text style={{alignSelf:'center', borderWidth:2, fontSize:33}}> {this.state.count} </Text>
            <Button full  style={{borderWidth:2, borderColor:'black', backgroundColor:'black'}}
            onPress={()=> this.setState({count: this.state.count+1})}>
              <Text style={{color:'white'}}>+</Text>
            </Button>
          </View>
          <Button style={{justifyContent:'center', marginTop:30, backgroundColor:'black'}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>
              Add for Measurement
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
